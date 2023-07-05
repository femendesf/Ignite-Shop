"use client"
import * as Menubar from '@radix-ui/react-menubar';
import { Handbag } from 'phosphor-react';

export function ShoppingCart(){
    return(
        <Menubar.Root>
            <Menubar.Menu>
                <Menubar.Trigger className='bg-gray800 hover:bg-gray600 w-12 h-12 rounded-md flex items-center justify-center min-[2200px]:w-[64px] min-[2200px]:h-[64px]'>
                    <Handbag size={24} className='min-[2200px]:w-[60px]'/>
                </Menubar.Trigger>
            </Menubar.Menu>
            
        </Menubar.Root>
    )
       
}