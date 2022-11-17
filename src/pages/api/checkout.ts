import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/srtipe";

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  quantity: number
  description: string
  defaultPriceId: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { products } = req.body as {products: ProductProps[]};

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!products) {
    return res.status(400).json({ error: 'Price not found.' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map((item) => ({
      price: item.defaultPriceId,
      quantity: item.quantity,
    })),

  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}