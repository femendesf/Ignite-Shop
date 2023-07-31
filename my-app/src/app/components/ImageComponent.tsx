'use client'

import { useEffect, useState } from "react"
import { Blurhash } from "react-blurhash"

interface ImageComponentProp{
    src: string,
    width: number,
    height: number,
    style: string,
}
export default function ImageComponent({src, width, height, style} : ImageComponentProp){
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    },[src])

    return(
        <>
            {!imageLoaded && (
                <Blurhash
                    hash="LK8Z1ObIu6j[G_a{X3j[t.j@VXaz"
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}

            {imageLoaded &&(
                <img
                    src={src}
                    alt=""
                    width={width}
                    height={height}
                    className={style}
                />
            )}
            
        </>
       
    )
}