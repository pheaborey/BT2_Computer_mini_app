import { getDb, ensureSchema } from './_lib/db.js';

function json(response, status = 200) {
  return new Response(JSON.stringify(response), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}

export default async function handler(request) {
  const sql = getDb();
  await ensureSchema(sql);
  if (request.method === 'GET') {
    const rows = await sql`
      SELECT id, category, rating, price, bg, icon, i18n
      FROM products WHERE active = TRUE ORDER BY created_at
    `;
    return json(rows.map(row => ({
      ...row,
      rating: Number(row.rating),
      price: Number(row.price)
    })));
  }
  return json({ error: 'Method not allowed' }, 405);
}
