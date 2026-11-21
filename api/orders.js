import { getDb, ensureSchema } from './_lib/db.js';

function json(response, status = 200) {
  return new Response(JSON.stringify(response), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}

export default async function handler(request) {
  const sql = getDb();
  await ensureSchema(sql);
  if (request.method === 'POST') {
    const body = await request.json();
    if (!body.customerName || !body.phone || !Array.isArray(body.items) || body.items.length === 0) {
      return json({ error: 'Customer name, phone, and cart items are required' }, 400);
    }
    if (body.fulfillment === 'delivery' && !body.address) return json({ error: 'Delivery address is required' }, 400);
    const orderNumber = `TG-${Date.now().toString().slice(-8)}-${Math.floor(100 + Math.random() * 900)}`;
    const rows = await sql`
      INSERT INTO orders (
        order_number, customer_name, phone, address, fulfillment, promo_code,
        subtotal, discount, delivery_fee, total, items
      ) VALUES (
        ${orderNumber}, ${body.customerName}, ${body.phone}, ${body.address || null},
        ${body.fulfillment || 'delivery'}, ${body.promoCode || null},
        ${body.subtotal}, ${body.discount || 0}, ${body.deliveryFee || 0},
        ${body.total}, ${JSON.stringify(body.items)}::jsonb
      ) RETURNING order_number
    `;
    return json({ order_number: rows[0].order_number }, 201);
  }
  return json({ error: 'Method not allowed' }, 405);
}
