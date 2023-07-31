'use client'

import Link from "next/link"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Handbag } from 'phosphor-react'
import { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

import ImageComponent from "./ImageComponent"

interface Product {
  id: string; 
  name: string;
  imageUrl: string;
  price: number | null;
  defaultPriceId: string;
}

interface CarrouselProps {
  products: Product[];
}

export function Carrousel({ products }: CarrouselProps) {
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const { addItem } = useShoppingCart()

  function handleButtonBuy(id: string) {
    
    const productToAdd = products.find((product) => product.id === id);

    if (productToAdd) {
      if (productToAdd.price !== null) {
      
        addItem({
          sku: id,
          name: productToAdd.name,
          price: productToAdd.price,
          image: productToAdd.imageUrl,
          quantity: 1,
          currency: 'BRL',
          price_id:  productToAdd.defaultPriceId
          
        });

      } else {
        console.error("Cannot add product to cart. Price is null.");
      }
    }
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
      origin: "center"
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <>
        <main
          ref={sliderRef}
          className="
            keen-slider
            flex
            ml-auto
            min-h-[580px]
            
          "
        >
        
          {products.map((product) =>(
              <div className="keen-slider__slide " id="link" key={product.id}>

                <Link href={`/products/${product.id}`}>
                  <div
                    className="
                      bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                      rounded-lg
                      relative
                      overflow-hidden
                      flex
                      items-center
                      justify-center
                      max-[3080px]:h-[480px]
                    "
                  >
                    <ImageComponent 
                      src={product.imageUrl}
                      width={520}
                      height={480}
                      style="object-cover max-[3080px]:w-[480px] max-[3080px]:h-[420px] "
                    />
                  </div>
                </Link>

                <footer
                    className="
                      absolute
                      bottom-[6.5rem]
                      left-1
                      right-1
                      rounded-md
                      p-5
                      flex
                      items-center
                      justify-between
                      whitespace-nowrap
                      gap-2

                      translate-y-1/3
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
                    <div className="flex flex-col gap-1">
                      <strong className="text-lg max-[1050px]:text-[16px] ">{product.name}</strong>
                      {product.price !== null && (
                      <span className="text-xl max-[1050px]:text-[18px] text-green300 font-bold">{(product.price/100).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})}</span>
                    )}
                    </div>

                    <button 
                      onClick={() => handleButtonBuy(product.id)}
                      className="
                        w-14
                        h-14
                        bg-green500
                        flex
                        items-center
                        justify-center
                        rounded-md
                        max-[1050px]:w-[40px]
                        max-[1050px]:h-[40px]
                        hover:bg-green300
                      "
                    >
                      <Handbag size={32} weight="bold" className=" max-[1050px]:w-[22px]"/>
                    </button>
                    
                </footer>
              </div>
            )
            
          )}

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </main>
        
      </>
  );
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? "arrow--disabled" : ""

  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -40 100 100"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}