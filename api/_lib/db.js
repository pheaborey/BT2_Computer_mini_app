import { neon } from '@neondatabase/serverless';

export function getDb() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  return neon(process.env.DATABASE_URL);
}

export async function ensureSchema(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      rating NUMERIC(2,1) NOT NULL DEFAULT 4.9,
      price NUMERIC(12,2) NOT NULL,
      bg TEXT NOT NULL,
      icon TEXT NOT NULL,
      active BOOLEAN NOT NULL DEFAULT TRUE,
      i18n JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id BIGSERIAL PRIMARY KEY,
      order_number TEXT UNIQUE NOT NULL,
      customer_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT,
      fulfillment TEXT NOT NULL,
      promo_code TEXT,
      subtotal NUMERIC(12,2) NOT NULL,
      discount NUMERIC(12,2) NOT NULL DEFAULT 0,
      delivery_fee NUMERIC(12,2) NOT NULL DEFAULT 0,
      total NUMERIC(12,2) NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      items JSONB NOT NULL DEFAULT '[]'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}
