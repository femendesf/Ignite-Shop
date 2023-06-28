'use client'

import Image from "next/image"
import axios from 'axios'
import { useState } from "react";

interface InfoProductProps{
    product:{
        id: string; 
        name: string;
        imageUrl: string;
        price: number | null;
        description: string | null,
        defaultPriceId: string
    }
}
export function InfoProduct({product}: InfoProductProps){

    // const exemplo: const router = useRouter()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handlerBuyProduct(){
        try{
            const response =  await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            setIsCreatingCheckoutSession(true)

            const {checkoutUrl} = response.data

            window.location.href = checkoutUrl 

            /*Como é uma rota externa, esta sendo usado o window.location.href
                Caso fosse uma rota interna, teria que usar o useRouter e dar uma router.push

                exemplo:

                router.push('/checkout')
            */
        }catch(err){
            alert(err)
            setIsCreatingCheckoutSession(false)
        }
    }

    return(
        <main 
        id="ProductContainer" 
        className="
            grid
            grid-cols-2
            items-stretch
            gap-16
            max-w-[1180px]
            mx-auto
        "
    >

        <div
            id="ImageContainer"
            className="
                w-full
                max-w-[576px]
                h-[656px]
                bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                rounded-lg
                p-1
                flex
                items-center
                justify-center

            "
        >
            <Image alt="" src={product.imageUrl} width={520} height={480} className="object-cover"/>
        </div>

        <div
            id="ProductsDetails"
            className="
                flex
                flex-col
            "
        >
            <h1
                className="
                    text-2xl
                    text-gray300
                "
            >
                {product.name}
            </h1>

            {product.price !== null && (
                <span
                    className=" first-letter:
                        mt-4
                        block
                        text-2xl
                        text-green300
                    "
                >
                   {(product.price/100).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})}
                </span>
                )
            }
           
            <p
                className="
                    mt-10
                    text-md
                    leading-relaxed
                    text-gray300
                "
            >
                {product.description}
            </p>

            <button
                disabled={isCreatingCheckoutSession}
                className="
                    mt-auto
                    bg-green500
                    rounded-lg
                    p-5
                    font-bold
                    text-md

                    hover:bg-green300

                    disabled:bg-opacity-60
                    disabled:cursor-not-allowed
                "
               
                onClick={handlerBuyProduct}
                
            >
                Comprar agora
            </button>
        </div>

    </main>

    )
}