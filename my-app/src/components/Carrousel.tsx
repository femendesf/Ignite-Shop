'use client'

import Link from "next/link"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camiseta1 from '../assets/Shirt/1.png' 

interface Product {
  id: string; 
  name: string;
  imageUrl: string;
  price: number | null;
}

interface CarrouselProps {
  products: Product[];
}

export function Carrousel({ products }: CarrouselProps) {

  console.log(products)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <main
      ref={sliderRef}
      className="
        keen-slider
        flex
        max-w-[calc(100vw-((100vw-1180px)/2))]
        ml-auto
        min-h-[656px]
      "
    >
      
      {products.map((product) =>(
          <Link href="" className="keen-slider__slide" id="link">
            <div
              className="
                bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                rounded-lg
                relative
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              <Image src={product.imageUrl} alt="" width={520} height={480} className="object-cover" />
  
              <footer
                className="
                  absolute
                  bottom-1
                  left-1
                  right-1
                  rounded-md
                  p-8
                  flex
                  items-center
                  justify-between
                  whitespace-nowrap
                  translate-y-full
                  opacity-0
                  transition-all
                  transition-transform-[0.2s]
                  ease-out
                  bg-black
                  bg-opacity-50
                  gap-5
          
                  hover:translate-y-0
                  hover:opacity-100
                "
              >
                <strong className="text-lg ">{product.name}</strong>
                {product.price !== null && (
                  <span className="text-xl text-green500 font-bold">R$ {(product.price/100).toFixed(2)}</span>
                )}
              </footer>
            </div>
          </Link>
        )
      )}
    </main>
  );
}
