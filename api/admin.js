import { getDb, ensureSchema } from './_lib/db.js';

function json(response, status = 200) {
  return new Response(JSON.stringify(response), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}
function authorized(request) {
  const password = process.env.ADMIN_PASSWORD;
  return password && (request.headers.get('authorization') || '') === `Bearer ${password}`;
}

export default async function handler(request) {
  if (!authorized(request)) return json({ error: 'Unauthorized' }, 401);
  const sql = getDb();
  await ensureSchema(sql);
  const url = new URL(request.url);
  const resource = url.searchParams.get('resource') || 'dashboard';

  if (request.method === 'GET' && resource === 'dashboard') {
    const [counts, recent] = await Promise.all([
      sql`SELECT
        (SELECT COUNT(*)::int FROM products) AS product_count,
        (SELECT COUNT(*)::int FROM orders) AS order_count,
        (SELECT COUNT(*)::int FROM orders WHERE status = 'pending') AS pending_count,
        (SELECT COALESCE(SUM(total), 0) FROM orders WHERE status != 'cancelled') AS revenue`,
      sql`SELECT * FROM orders ORDER BY created_at DESC LIMIT 10`
    ]);
    return json({ counts: counts[0], recent });
  }
  if (request.method === 'GET' && resource === 'products') return json(await sql`SELECT * FROM products ORDER BY created_at`);
  if (request.method === 'GET' && resource === 'orders') return json(await sql`SELECT * FROM orders ORDER BY created_at DESC`);

  if (request.method === 'POST' && resource === 'seed') {
    const seed = [
      ['aud-anc','audio',4.9,179.00,'linear-gradient(135deg, #1e3a8a, #3b82f6)','headphones',{en:{badge:'Bestseller',title:'StudioPro ANC Headphones',short:'Hybrid -45dB noise cancellation & 50-hour battery.',desc:'Adaptive active noise cancellation with premium comfort.',options:['Midnight Black','Silver Mist','Sandstone']},km:{badge:'លក់ដាច់បំផុត',title:'កាសឥតខ្សែ StudioPro ANC',short:'កាត់សំឡេងរំខាន -45dB និងថ្ម 50 ម៉ោង។',desc:'កាត់បន្ថយសំឡេងរំខាន និងពាក់ស្រួល។',options:['ខ្មៅគ្រើម','ប្រាក់ភ្លឺ','ពណ៌ខ្សាច់']},zh:{badge:'畅销爆款',title:'StudioPro ANC 降噪耳机',short:'-45dB 降噪，50 小时续航。',desc:'自适应降噪与舒适佩戴。',options:['午夜黑','星雾银','砂岩米']}}],
      ['aud-spk','audio',4.8,99.00,'linear-gradient(135deg, #0f766e, #14b8a6)','speaker',{en:{badge:'IP67 Waterproof',title:'PulseWave 360° Smart Speaker',short:'360-degree stereo sound with deep bass.',desc:'Omnidirectional sound, IP67 protection, and 20-hour playback.',options:['Teal','Charcoal','Coral']},km:{badge:'ការពារទឹក IP67',title:'ឧបករណ៍បំពងសំឡេង PulseWave',short:'សំឡេងជុំវិញ 360 ដឺក្រេ និងបាសក្រាស់។',desc:'សំឡេងច្បាស់ធន់ទឹក និងថ្ម 20 ម៉ោង។',options:['ខៀវបៃតង','ខ្មៅធ្យូង','ផ្កាថ្ម']},zh:{badge:'IP67 防水',title:'PulseWave 360° 智能音箱',short:'360 度立体声音效。',desc:'全向音效、防水和 20 小时续航。',options:['青碧色','炭黑色','珊瑚橙']}}],
      ['cmp-ultra','computers',4.9,1199.00,'linear-gradient(135deg, #312e81, #6366f1)','laptop',{en:{badge:'Pro Choice',title:'AeroBook 14" OLED Ultrabook',short:'120Hz OLED, 16GB RAM, lightweight chassis.',desc:'High-performance ultrabook with precision aluminum body.',options:['512GB SSD','1TB SSD','2TB SSD']},km:{badge:'ជម្រើសអ្នកជំនាញ',title:'AeroBook 14" OLED',short:'អេក្រង់ 120Hz OLED RAM 16GB។',desc:'កុំព្យូទ័រល្បឿនលឿនតូចស្រាល។',options:['512GB SSD','1TB SSD','2TB SSD']},zh:{badge:'专业之选',title:'AeroBook 14" OLED 笔记本',short:'120Hz OLED，16GB 内存。',desc:'轻薄高性能笔记本电脑。',options:['512GB 固态','1TB 固态','2TB 固态']}}],
      ['cmp-key','computers',4.8,139.00,'linear-gradient(135deg, #4c1d95, #8b5cf6)','keyboard',{en:{badge:'Hot',title:'KeyForge 75% Keyboard',short:'Wireless mechanical keyboard.',desc:'Tri-mode wireless and hot-swappable switches.',options:['Linear Switch','Tactile Switch']},km:{badge:'ពេញនិយម',title:'ក្តារចុច KeyForge 75%',short:'ក្តារចុចមេកានិចឥតខ្សែ។',desc:'ភ្ជាប់ 2.4GHz Bluetooth និង USB-C។',options:['រលូន','មានអារម្មណ៍ចុច']},zh:{badge:'热销',title:'KeyForge 75% 键盘',short:'三模机械键盘。',desc:'支持热插拔与 RGB 背光。',options:['线性轴','段落轴']}}],
      ['acc-gan','accessories',4.9,69.00,'linear-gradient(135deg, #065f46, #10b981)','charger',{en:{badge:'140W GaN',title:'VoltCore 140W Charger',short:'4-port fast charger for laptop and phone.',desc:'Safe PD 3.1 charging for multiple devices.',options:['US Plug','EU Plug','UK Plug']},km:{badge:'140W GaN',title:'ឆ្នាំងសាក VoltCore 140W',short:'ឆ្នាំងសាក 4 ជើងសម្រាប់តុបករណ៍។',desc:'សាកសុវត្ថិភាពកម្លាំងលឿន។',options:['US','EU','UK']},zh:{badge:'140W 氮化镓',title:'VoltCore 140W 充电器',short:'四口 PD 快充。',desc:'同时为多设备安全快充。',options:['美规','欧规','英规']}}],
      ['acc-ssd','accessories',4.8,115.00,'linear-gradient(135deg, #334155, #64748b)','ssd',{en:{badge:'2000MB/s',title:'VaultNVMe Portable SSD',short:'Rugged USB 3.2 solid-state drive.',desc:'Fast 2,000MB/s storage with rugged protection.',options:['1TB','2TB','4TB']},km:{badge:'2000MB/s',title:'VaultNVMe Portable SSD',short:'ឧបករណ៍ផ្ទុកល្បឿនលឿន។',desc:'ផ្ទេរឯកសារលឿន និងធន់។',options:['1TB','2TB','4TB']},zh:{badge:'2000MB/s',title:'VaultNVMe 移动固态硬盘',short:'高速三防固态硬盘。',desc:'读取速度高达 2000MB/s。',options:['1TB','2TB','4TB']}}],
      ['smt-watch','smart',4.9,229.00,'linear-gradient(135deg, #9a3412, #f97316)','watch',{en:{badge:'New',title:'ChronoFit Ultra Watch',short:'AMOLED GPS smartwatch with 14-day battery.',desc:'Premium health tracking and durable titanium bezel.',options:['45mm Titanium','49mm Titanium']},km:{badge:'ថ្មី',title:'នាឡិកា ChronoFit Ultra',short:'GPS AMOLED និងថ្ម 14 ថ្ងៃ។',desc:'តាមដានសុខភាព និងធន់ធ្ងន់។',options:['45mm','49mm']},zh:{badge:'新品',title:'ChronoFit Ultra 智能手表',short:'AMOLED 双频 GPS，14 天续航。',desc:'健康监测与钛金属表圈。',options:['45mm','49mm']}}],
      ['smt-buds','smart',4.7,119.00,'linear-gradient(135deg, #831843, #ec4899)','earbuds',{en:{badge:'Spatial Audio',title:'SonicBuds Pro',short:'Adaptive earbuds with wireless charging.',desc:'AI call noise reduction and 32-hour total battery.',options:['Arctic White','Graphite Gray']},km:{badge:'សំឡេង Spatial',title:'SonicBuds Pro',short:'កាសឥតខ្សែជាមួយប្រអប់សាក។',desc:'កាត់សំឡេងរំខាន និងថ្ម 32 ម៉ោង។',options:['ស','ប្រផេះ']},zh:{badge:'空间音频',title:'SonicBuds Pro',short:'无线充电降噪耳机。',desc:'AI 通话降噪与 32 小时续航。',options:['极地白','石墨灰']}}]
    ];
    for (const p of seed) {
      await sql`
        INSERT INTO products (id,category,rating,price,bg,icon,i18n)
        VALUES (${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]},${JSON.stringify(p[6])}::jsonb)
        ON CONFLICT (id) DO UPDATE SET
          category=EXCLUDED.category,rating=EXCLUDED.rating,price=EXCLUDED.price,
          bg=EXCLUDED.bg,icon=EXCLUDED.icon,i18n=EXCLUDED.i18n,updated_at=NOW()
      `;
    }
    return json({ seeded: seed.length });
  }

  if (request.method === 'POST' && resource === 'products') {
    const body = await request.json();
    const rows = await sql`
      INSERT INTO products (id, category, rating, price, bg, icon, active, i18n)
      VALUES (
        ${body.id}, ${body.category}, ${body.rating || 4.9}, ${body.price},
        ${body.bg || 'linear-gradient(135deg, #1e3a8a, #3b82f6)'},
        ${body.icon || 'headphones'}, ${body.active !== false}, ${JSON.stringify(body.i18n || {})}::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET
        category=EXCLUDED.category, rating=EXCLUDED.rating, price=EXCLUDED.price,
        bg=EXCLUDED.bg, icon=EXCLUDED.icon, active=EXCLUDED.active,
        i18n=EXCLUDED.i18n, updated_at=NOW()
      RETURNING *
    `;
    return json(rows[0]);
  }
  if (request.method === 'DELETE' && resource === 'products') {
    const id = url.searchParams.get('id');
    if (!id) return json({ error: 'Product id is required' }, 400);
    await sql`DELETE FROM products WHERE id = ${id}`;
    return json({ success: true });
  }
  if (request.method === 'PATCH' && resource === 'orders') {
    const id = url.searchParams.get('id');
    const body = await request.json();
    if (!id || !body.status) return json({ error: 'Order id and status are required' }, 400);
    if (!['pending', 'processing', 'completed', 'cancelled'].includes(body.status)) return json({ error: 'Invalid status' }, 400);
    const rows = await sql`UPDATE orders SET status=${body.status}, updated_at=NOW() WHERE id=${id}::bigint RETURNING *`;
    return json(rows[0] || null);
  }
  if (request.method === 'DELETE' && resource === 'orders') {
    const id = url.searchParams.get('id');
    if (!id) return json({ error: 'Order id is required' }, 400);
    await sql`DELETE FROM orders WHERE id=${id}::bigint`;
    return json({ success: true });
  }
  return json({ error: 'Method not allowed' }, 405);
}
