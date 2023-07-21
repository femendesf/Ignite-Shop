import { Roboto } from 'next/font/google'

import Image from 'next/image'
import logoImage from "../assets/logo.svg"

import { CartProvider } from 'use-shopping-cart'

import './global.css'
import Link from 'next/link'

import { ShoppingCart } from './components/ShoppingCart'

import { loadStripe } from "@stripe/stripe-js";

const robotoNormal = Roboto({
  weight: '400',
  subsets: ['latin']
})

const stripeKey = process.env.STRIPE_PUBLIC_KEY!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoNormal.className}>

        <div className='flex flex-col items-start justify-center mt-1'>
          
          <header className='py-8 px-[136px] w-full mx-auto flex justify-between items-center'>
            <Link href="/">
              <Image src={logoImage} alt="" width={130} height={50} className='min-[2200px]:w-[160px] min-[2200px]:h-[100px]'/>
            </Link>
           
           <ShoppingCart/>
          </header>
         
        </div>
        
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={stripeKey}
          successUrl='http://localhost:3000/success'
          cancelUrl="twitter.com/dayhaysoos"
          currency="BRL"
          shouldPersist
        >
           {children}
        </CartProvider>
         
        </body>
    </html>
  )
}
console.log(CartProvider)