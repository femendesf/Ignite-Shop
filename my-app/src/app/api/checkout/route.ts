import { stripe } from "@/lib/stripe"

import { NextResponse, NextRequest } from "next/server" 

export async function POST(req: NextRequest){

    const { items }= await req.json()

    const lineItems = items.map(({ id, quantity } : any) =>(
        {
            price: id,
            quantity,
        }
        )
    );

    console.log(lineItems)
 
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession =  await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: lineItems,
        success_url: successUrl,
        cancel_url: cancelUrl,
    })

   return NextResponse.json({
      checkoutUrl: checkoutSession.url
   })
}