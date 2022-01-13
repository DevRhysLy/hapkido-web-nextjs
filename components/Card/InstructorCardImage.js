import React from "react"
import Image from 'next/image';


export default function InstructorCardImage({ src, alt }) {

    return (
        <div style={{ height: "28vh", width: "100%", position: 'relative' }}>
            <Image
                layout="fill"
                objectFit="cover"
                src={src}
                alt={alt}
            />
        </div>

    )
}
