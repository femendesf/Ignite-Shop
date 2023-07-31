'use client'

import Image from 'next/image'
import logoImage from "../../assets/logo.svg"
import Link from 'next/link'
import { ShoppingCart } from './ShoppingCart'
import { SpanCart } from './SpanCart'
import {usePathname} from 'next/navigation'

export function Header(){

    const page = usePathname()
 
    const isOnSuccessPage = page.includes('/success')

    return(
        <>
            {isOnSuccessPage ? 

             <header className='py-8 px-[136px] w-full mx-auto flex items-center justify-center'>
                
                <Link href="/">
                    <Image src={logoImage} alt="" width={130} height={50} className='min-[2200px]:w-[160px] min-[2200px]:h-[100px]'/>
                </Link>
    
             </header>
           
         :
            <header className='py-8 px-[136px] w-full mx-auto flex justify-between items-center'>
                    
                <Link href="/">
                    <Image src={logoImage} alt="" width={130} height={50} className='min-[2200px]:w-[160px] min-[2200px]:h-[100px]'/>
                </Link>

                <div className='flex'>
                    <ShoppingCart/>
                    <SpanCart/>
                </div>
            
            </header> 
         }
        </>
        
    )
}