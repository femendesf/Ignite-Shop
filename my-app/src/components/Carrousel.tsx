'use client'

import Link from "next/link"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camiseta1 from '../assets/Shirt/1.png' 

interface CarrouselProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | null;
  }[];
}

export function Carrousel(props: CarrouselProps) {
  const { products } = props;

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
      {products.map((product) => (
        <Link href="" className="keen-slider__slide" key={product.id}>
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
            <Image src={camiseta1} alt="" width={520} height={480} className="object-cover" />

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
                translate-y-full
                opacity-0
                transition-all
                transition-transform-[0.2s]
                ease-out
                bg-black
                bg-opacity-50

                hover:translate-y-0
                hover:opacity-100
              "
            >
              <strong className="text-lg">{product.name}</strong>
              <span className="text-xl text-green500 font-bold">{product.price}</span>
            </footer>
          </div>
        </Link>
      ))}
    </main>
  );
}
