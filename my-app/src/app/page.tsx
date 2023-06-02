import Link from "next/link"
import Image from "next/image"

import camiseta1 from '../assets/Shirt/1.png'
import camiseta2 from '../assets/Shirt/2.png'
import camiseta3 from '../assets/Shirt/3.png'

export default function Home() {
  return (
    <main
    className="
      flex
      gap-12 
      w-[calc(100vw-((100vw-1180px)/2))]
      ml-auto
      min-h-[656px]
   
     "
    >

      <Link href='' 
        className="
          bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]
          rounded-lg
          p-1
          relative
          overflow-hidden
          flex
          items-center
          justify-center
         
        "
        id="link"
      >

        <Image src={camiseta1} alt="" width={520} height={480} className="object-cover"/>

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
            ">

            <strong className="text-lg">Camiseta X</strong>

            <span className="text-xl text-green500 font-bold">R$ 79,90</span>

          </footer>

      </Link>
       
      <Link href='' className="bg-gradient-to-b from-[#1ea483_0%] to-[#7465d4_100%]">
        
        <Image src={camiseta2} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Link>  

      
    </main>
  )
}
  