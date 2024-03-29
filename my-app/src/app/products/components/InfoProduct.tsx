'use client'

import Image from "next/image"

import { useShoppingCart } from "use-shopping-cart";

interface InfoProductProps{

    product:{
        id: string; 
        name: string;
        imageUrl: string;
        price: number | null;
        description: string | null,
        defaultPriceId: string;
    }
}
export function InfoProduct({product}: InfoProductProps){

    
    const { addItem } = useShoppingCart()

    function handlerBuyProduct(id: string){
       
        addItem({
          sku:id,
          name: product.name,
          price: product.price!,
          image: product.imageUrl,
          quantity: 1,
          currency: 'BRL',
          price_id: product.defaultPriceId
        })
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
                max-[1520px]:w-[980px]
                max-[1520px]:h-[480px]
            "
        >
            
        <div
            id="ImageContainer"
            className="
                w-full
                max-w-[576px]
                min-[1520px]:h-[650px]
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
                    className="
                        first-letter:
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
                className="
                    mt-auto
                    bg-green500
                    rounded-lg
                    p-5
                    font-bold
                    text-md

                    hover:bg-green300
                "
                onClick={() => handlerBuyProduct(product.id)}
            >
                Colocar na sacola
            </button>
        </div>

    </main>

    )
}