"use client"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';

import camisa1 from '../../assets/Shirt/1.png'
import closeMenuSvg from '../../assets/closeMenu.svg'
import { useState } from 'react';

export function ShoppingCart(){
    const [isOpen, setIsOpen] = useState(false)

    function closeMenu(){
        setIsOpen(!isOpen)
    }
    return(
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger 
                className='
                    bg-gray800
                    hover:bg-gray600
                    w-12
                    h-12
                    rounded-md
                    flex
                    items-center
                    justify-center
                    min-[2200px]:w-[64px]
                    min-[2200px]:h-[64px]'
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
                        '
                >
                    <div>

                    </div>
                    <button className='mt-6 ml-[90%]' onClick={closeMenu}>
                        {<Image alt='x' src={closeMenuSvg} width={16} height={16}/>}
                    </button>
                  
                    <h1 className='mt-6 text-lg'>Sacola de compras</h1>

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
                            <Image src={camisa1} width={94} height={94} alt='' className='max-[1360px]:w-[70px] max-[1360px]:h-[70px]'/>
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
                                Camiseta Beyond the Limits
                            </h2>

                            <span className='text-md  max-[1360px]:text-base'>R$79,90</span>

                            <button className='
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
                    <DropdownMenu.Item className='flex gap-6 mt-8 items-center'>

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
                            <Image src={camisa1} width={94} height={94} alt='' className='max-[1360px]:w-[70px] max-[1360px]:h-[70px]'/>
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
                                Camiseta Beyond the Limits
                            </h2>

                            <span className='text-md  max-[1360px]:text-base'>R$79,90</span>

                            <button className='
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
                    <DropdownMenu.Item className='flex gap-6 mt-8 items-center'>

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
                            <Image src={camisa1} width={94} height={94} alt='' className='max-[1360px]:w-[70px] max-[1360px]:h-[70px]'/>
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
                                Camiseta Beyond the Limits
                            </h2>

                            <span className='text-md  max-[1360px]:text-base'>R$79,90</span>

                            <button className='
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
                
                    <div className='
                        mt-48
                        max-[1360px]:mt-28
                        flex
                        justify-between'
                    >
                        <span>Quantidade</span>
                        <span className='text-gray300'>3 itens</span>
                    </div>

                    <div className='
                        mt-2
                        flex
                        justify-between
                        font-bold'
                    >
                        <span className='mt-2 text-md max-[1360px]:text-base'>Valor total</span>
                        <span className='text-xl max-[1360px]:text-base'>R$ 270,00</span>
                    </div>

                    <button className='
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
                        '
                        
                    >
                        Finalizar compra
                    </button>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>

    )
       
}

/*
className='bg-gray800 hover:bg-gray600 w-12 h-12 rounded-md flex items-center justify-center min-[2200px]:w-[64px] min-[2200px]:h-[64px]'>
                    <Handbag size={24} className='min-[2200px]:w-[60px]'/>
*/