import { stripe } from "@/lib/stripe"

import { NextResponse, NextRequest } from "next/server"

export async function POST(req: NextRequest){

    let data = await req.json()
    let priceId = data.priceId
  
    if(!priceId){
      return NextResponse.json({erro: 'Price not found'}, {status: 400})
    }
    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession =  await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items:[
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url: successUrl,
        cancel_url: cancelUrl,
    })

   return NextResponse.json({
      checkoutUrl: checkoutSession.url
   })
}