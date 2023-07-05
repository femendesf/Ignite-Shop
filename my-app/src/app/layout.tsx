import { Roboto } from 'next/font/google'

import Image from 'next/image'

import logoImage from "../assets/logo.svg"


import './global.css'
import Link from 'next/link'
import { ShoppingCart } from './components/ShoppingCart'
 
const robotoNormal = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoNormal.className}>

        <div className='flex flex-col items-start justify-center min-h-[100vh] '>
          
          <header className='py-8 w-full max-w-[1180px] mx-auto flex justify-between items-center'>
            <Link href="/">
              <Image src={logoImage} alt="" width={130} height={50} className='min-[2200px]:w-[160px] min-[2200px]:h-[100px]'/>
            </Link>
           
           <ShoppingCart/>
          </header>
          {children}
        </div>
        
        </body>
    </html>
  )
}
