import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import {redirect} from 'next/navigation'
import { Metadata } from 'next'

interface SessionProp{
    searchParams:{
        session_id: string
    }
}

export const metadata: Metadata = {
    title: 'Compra efetuada | Ignite-Shop',
    robots: {
      index: false,
    }
}
export default 
async function Success({searchParams} : SessionProp){

    const sessionId = searchParams.session_id

    if(!sessionId){
        return(
            redirect("/")
        )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    const product = session.line_items?.data[0].price?.product as Stripe.Product
    
    return(
        <main id="SuccessContainer"
            className="
                flex
                flex-col
                items-center
                justify-center
                mx-auto h-[656px]
            "
        >
            <h1 className="
                text-2xl
                text-gray100
            ">
                Compra efetuada
            </h1>

            <div id="ImageContainer"
                className="
                    w-full
                    max-w-[130px]
                    h-36
                    bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                    rounded-lg
                    p-1
                    flex
                    items-center
                    justify-center
                    mt-16
                "
            >
                <Image alt="" src={product.images[0]} width={130} height={144}
                    className="
                        object-cover
                    "
                />
                    
            </div>

            <p className="
                text-xl
                text-gray300
                max-w-[560px]
                text-center
                mt-8
                "
            >
                Uhuul <strong> {customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. 
            </p>

            <Link href="" 
                className="
                    mt-20
                    block
                    text-lg
                    text-green500
                    hover:text-green300
                "
            >
                Voltar ao catálogo
            </Link>
        </main>
    )
}