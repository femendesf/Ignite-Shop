'use client'

import { stripe } from "@/lib/stripe"

import Stripe from "stripe"
import { Carrousel } from "../components/Carrousel"
import { useState } from "react"

interface HomeProps {

  id: string;
  name: string;
  imageUrl: string;
  price: number | null ;

}

export default async function Home() {

  const [productsData, setProductsData] = useState<HomeProps[]>([])
 
  const fetchProducts = async () => {
    
    const response = await stripe.products.list({
      expand: ['data.default_price']
    });

    const products= response.data.map(product => {
      const price = product.default_price as Stripe.Price;

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount
      };
    });

    setProductsData(products);
  };
    
  
  return (
    <Carrousel products={productsData}/>
  )
  
}
