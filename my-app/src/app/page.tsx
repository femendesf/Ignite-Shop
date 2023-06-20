'use client'


import { Carrousel } from "../components/Carrousel"

import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

interface ProductsProps {
  id: string; 
  name: string;
  imageUrl: string;
  price: number | null;
}

export default async function Home() {
  
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products: ProductsProps[] = response.data.map(product => {

    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
    };
  });

  console.log(products[0])
  
  return (
    <div>
      {/*@ts-expect-error Async Server Component*/}
      <Carrousel prop={products}/>
    </div>
  )
}
