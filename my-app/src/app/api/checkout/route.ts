import { stripe } from "@/lib/stripe"
import { NextApiRequest, NextApiResponse } from "next"

export default async function PUT(req: NextApiRequest, res: NextApiResponse){

    const priceId = 'prod_O29znkIIAFkfD0'
    const sucessUrl = `${process.env.NEXT_URL}/success`

    const checkoutSession =  await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        mode: 'payment',
        line_items:[
            {
                price: priceId,
                quantity: 1
            }
        ]
    })

    return res.status(201).json({
       checkoutUrl: checkoutSession.url
    })
}

