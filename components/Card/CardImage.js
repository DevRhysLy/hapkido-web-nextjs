import React from "react"
import Image from 'next/image';


export default function CardImage({ src, alt }) {

    return (
        <div style={{borderRadius: "4px 4px 0px 0px", height: "180px", width: "100%", position: 'relative' }}>
            <Image
                layout="fill"
                objectFit="cover"
                src={src}
                alt={alt}
            />
        </div>

    )
}
