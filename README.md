iBzA — Local dev and setup

Quick start

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Open the site

- http://localhost:3000
- http://localhost:3000/products

Adding 3D models

Place GLB files at `public/models/<product-id>.glb` (for example `public/models/aero-shift.glb`). The product page will try to load the model via `<model-viewer>` and fall back to the product poster image.

Stripe Checkout setup (optional)

To enable real checkout you must set environment variables:

- `STRIPE_SECRET_KEY` — your Stripe secret key (server-side)
- `NEXT_PUBLIC_BASE_URL` — base URL used for success/cancel redirects, e.g. `http://localhost:3000`

With keys present the website will create a Stripe Checkout Session and redirect the user to Stripe for payment.

Files of interest

- `app/products/[id]/page.js` — product detail + model-viewer fallback
- `app/api/create-checkout-session/route.js` — server route that creates Stripe Checkout sessions
- `components/CartContext.js` — cart provider persisted to `localStorage`
