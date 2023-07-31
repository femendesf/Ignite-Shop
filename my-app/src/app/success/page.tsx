import { stripe } from "@/lib/stripe";
import Link from "next/link";
import Stripe from "stripe";
import {redirect} from 'next/navigation'
import { Metadata } from 'next'
import ImageComponent from "../components/ImageComponent";

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

export default async function Success({searchParams} : SessionProp){

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
    const product = session.line_items?.data
    let totQuantity = 0
    
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

            <div className="flex items-center justify-center ml-[-50px]">

            {product?.map((item) => {

                const productData = item.price?.product as Stripe.Product
                const productImage = productData.images[0]

                totQuantity = totQuantity + item.quantity!

                return(
                    <div 
                        key={item.id}
                        id="ImageContainer"
                        className="
                            w-36
                            h-36
                            mr-[-50px]
                            bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                            p-1
                            flex
                            items-center
                            justify-center
                            mt-16
                            rounded-full
                            
                            shadow-2xl
                        "
                    >
                        <ImageComponent src={productImage} width={130} height={144} style={"object-cover"}/>
                        
                    </div>
                )
            })}
            </div>
             
                <p className="
                    text-xl
                    text-gray300
                    max-w-[560px]
                    text-center
                    mt-8
                    "
                >
                    Uhuul <strong>{customerName}</strong>, sua compra de <strong>{totQuantity}</strong> {product?.length! > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa. 
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