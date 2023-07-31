'use client'

import { Roboto } from 'next/font/google'
import { CartProvider } from 'use-shopping-cart'

import './global.css'

import { Header } from './components/Header'

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

          <CartProvider
              mode="payment"
              cartMode="client-only"
              stripe={stripeKey}
              successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
              cancelUrl={`${process.env.NEXT_URL}/`}
              currency="BRL"
              shouldPersist
          >
            <div className='flex flex-col items-start justify-center mt-1'>
              <Header/>
            </div>
              {children}
        </CartProvider>
         
        </body>
    </html>
  )
}
