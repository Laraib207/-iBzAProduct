import Stripe from 'stripe';

export async function POST(req) {
  try {
    const body = await req.json();
    const items = body.items || [];

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return new Response(JSON.stringify({ error: 'Stripe secret key not configured on server.' }), { status: 501 });
    }

    const stripe = new Stripe(secret, { apiVersion: '2022-11-15' });

    const line_items = items.map((it) => ({
      price_data: {
        currency: 'inr',
        product_data: { name: it.name, metadata: { sku: it.sku || '' } },
        unit_amount: Math.round((it.price || 0) * 100)
      },
      quantity: it.quantity || 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000') + '/checkout?success=1',
      cancel_url: (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000') + '/checkout?canceled=1'
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500 });
  }
}
