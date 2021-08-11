import React from "react"
import Image from 'next/image';
import styles from './CardImage.module.css'


export default function CardImage({ src, alt }) {

    return (
        <div style={{ height: "180px", width: "100%", position: 'relative' }}>
            <Image
                layout="fill"
                objectFit="cover"
                src={src}
                alt={alt}
            />
        </div>

    )
}
