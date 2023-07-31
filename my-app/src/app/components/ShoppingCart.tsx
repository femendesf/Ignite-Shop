"use client"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';

import closeMenuSvg from '../../assets/closeMenu.svg'

import { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import axios from 'axios';
import ImageComponent from './ImageComponent';

interface ItemCart{
    id: string,
    img?: string,
    name: string,
    price: number,
    quantity: number,
}

export function ShoppingCart(){

    const [isOpen, setIsOpen] = useState(false) // Para fechar o menu do carrinho de compras

    const [stateCart, setStateCart] = useState(true) // Controlador se tem item no carrinho

    const [itemCart, setItemCart] = useState<ItemCart[]>([]) // Lista dos itens do carrinho

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)


    const {cartCount, totalPrice, cartDetails, removeItem, clearCart, redirectToCheckout} = useShoppingCart()

    useEffect(() => {
      
        if(cartCount! > 0){
            setStateCart(false)
        }else{
            setStateCart(true)
        }
      
        const itemsArray = Object.keys(cartDetails!).map((itemId) => {

            const item = cartDetails![itemId]

            const itemCartObj: ItemCart = {
                id: item.id,
                img: item.image,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            }
            return itemCartObj
        })

        setItemCart(itemsArray)
       

    }, [cartCount])

 
    function closeMenu(){
        setIsOpen(!isOpen)
    }

    async function handleCheckout(){
       
        try{
            const itemsToSend = itemCart.map(({ id, quantity }) => ({ id, quantity }));
            const response = await axios.post('/api/checkout', {
               items: itemsToSend
            })

            const {checkoutUrl} = response.data
            window.location.href = checkoutUrl
        }catch(err){
            alert(err)
        }

        setIsCreatingCheckoutSession(true)
        clearCart()
    }
    
    return(
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger 
                disabled={stateCart}
                id='handBag'
                className='
                    bg-gray800
                    active:hover:bg-gray600
                    w-12
                    h-12
                    rounded-md
                    flex
                    items-center
                    justify-center
                    min-[2200px]:w-[64px]
                    min-[2200px]:h-[64px]
                    disabled:text-gray700
                    disabled:cursor-not-allowed
                    '
                >
                <Handbag size={24} className='min-[2200px]:w-[60px]'/>

            </DropdownMenu.Trigger>

            <DropdownMenu.Portal className='h-[1200px]'>

                <DropdownMenu.Content 
                    className='
                        bg-gray800                        
                        w-[30rem]
                        h-[58rem]
                        max-[1380px]:h-[630px]
                        relative
                        top-[-120px]
                        max-[1380px]:top-[-90px]
                        overflow-auto
                        px-12
                        gap-6
                        py-3
                       
                        shadow-2xl
                        shadow-black
                        '
                >
                    <div>

                    </div>
                    <button className='mt-6 ml-[90%]' onClick={closeMenu}>
                        {<Image alt='x' src={closeMenuSvg} width={16} height={16}/>}
                    </button>
                  
                    <h1 className='mt-6 text-lg'>Sacola de compras</h1>

                    {itemCart.map(item => {
                        return(
                            <DropdownMenu.Item className='flex gap-6 mt-8 items-center outline-none'>
                                <div 
                                    className='
                                        w-[102px]
                                        h-[93px]
                                        max-[1360px]:w-[80px]
                                        max-[1390px]:h-[70px]
                                        bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
                                        rounded-lg
                                        flex
                                        items-center
                                        justify-center
                                        '
                                >
                                    <ImageComponent src={item.img!} width={94} height={94} style='max-[1360px]:w-[70px] max-[1360px]:h-[70px]'/>
                        
                                </div>
                                
                                <div className='flex
                                    flex-col
                                    justify-start
                                    gap-1'
                                >
                                    <h2 className='
                                        text-md
                                        max-[1360px]:text-base
                                        text-gray300
                                        '
                                    >
                                        {item.name}
                                    </h2>

                                    <span className='text-md  max-[1360px]:text-base'>{(item.price!/100).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})}</span>

                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className='
                                            w-[65px]
                                            text-base
                                            max-[1360px]:text-[14px]
                                            text-green500
                                            font-bold
                                            hover:text-green300
                                            '
                                    > 
                                        Remover
                                    </button>
                                </div>
                            </DropdownMenu.Item>
                        )
                    })}

                    <div className='
                        mt-48
                        max-[1360px]:mt-28
                        flex
                        justify-between'
                    >
                        <span>Quantidade</span>
                        <span className='text-gray300'>{cartCount} itens</span>
                    </div>

                    <div className='
                        mt-2
                        flex
                        justify-between
                        font-bold'
                    >
                        <span className='mt-2 text-md max-[1360px]:text-base'>Valor total</span>
                        <span className='text-xl max-[1360px]:text-base'>{(totalPrice!/100).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})}</span>
                    </div>

                    <button 
                        disabled={isCreatingCheckoutSession}
                        className='
                        mt-14
                        w-[384px]
                        h-[69px]
                        bg-green500
                        rounded-lg
                        font-bold
                        text-[18px]
                        text-white
                        hover:bg-green300
                        mb-10
                            
                        disabled:bg-opacity-60
                        disabled:cursor-not-allowed
                        '
                        onClick={handleCheckout}
                    >
                       Finalizar compra
                    </button>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
       
}