import { useShoppingCart } from "use-shopping-cart"

export function SpanCart(){

    const {cartCount} = useShoppingCart()

    return(
        <div>
            {cartCount! > 0 ? <span className='
                bg-green500
                w-6
                h-6
                flex
                rounded-full
                items-center
                justify-center
                text-sm
                p-2
                font-bold
                border-[2px]
                border-gray900
                ml-[-16px]
                '
              >
                {cartCount}
              </span> : ''}
        </div>
    )
}