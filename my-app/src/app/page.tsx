import { Carrousel } from "../components/Carrousel"

import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

export const revalidate = 60 * 60 * 2

export default async function Home() {

 
  const response = await stripe.products.list(
    {expand: ['data.default_price']}
  );

  revalidate

  const products : any[] = response.data.map((product: any) : any => {

    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    };
  });

  return (
    <Carrousel products={products}/>
  )
}
