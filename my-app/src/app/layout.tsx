import { Roboto } from 'next/font/google'

import Image from 'next/image'

import logoImage from "../assets/logo.svg"

import './global.css'


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
          
          <header className='py-8 w-full max-w-[1180px] mx-auto'>
            <Image src={logoImage} alt="" width={130} height={50}/>
          </header>
          {children}
        </div>
        
        </body>
    </html>
  )
}
