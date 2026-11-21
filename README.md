# BT2 Computer Mini App

Vercel-hosted storefront with a Neon PostgreSQL database and full admin panel.

## Local setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`
3. Set `DATABASE_URL` to the Neon connection string.
4. Set `ADMIN_PASSWORD` to a strong password.
5. Run `npx vercel dev`

## Vercel setup

Add these environment variables in **Project Settings -> Environment Variables**:

- `DATABASE_URL`: Neon pooled PostgreSQL connection string
- `ADMIN_PASSWORD`: password used to sign into the admin panel

Deploy the project, open `/admin.html`, sign in, and select **Seed sample products**.

## Routes

- `/` customer storefront
- `/admin.html` product and order administration
- `/api/products` public product catalog
- `/api/orders` customer order submission
- `/api/admin` protected admin API
