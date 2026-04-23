'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Slideshow({ images }: {
    images: [string, string][],
}) {
    const imageCount = images.length
    const [activeIndex, setActiveIndex] = useState(0)

    function prevSlide() {
        if (activeIndex <= 0) return
        setActiveIndex(activeIndex - 1)
    }

    function nextSlide() {
        if (activeIndex + 1 >= imageCount) return
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className='h-full'>
            <div className='h-full relative'>
                {images
                    .filter((_, index) => index === activeIndex)
                    .map((image, index) => (
                    <Image
                        key={index}
                        src={image[0]}
                        alt={image[1]}
                        fill={true}
                        loading='eager'
                        className='object-contain'
                    />
                ))}

                <button className='absolute transition text-lg top-1/2 -mt-6 w-8 h-12 hover:text-rose-500 hover:bg-neutral-800' onClick={prevSlide}>&#10094;</button>
                <button className='absolute transition text-lg top-1/2 -mt-6 w-8 h-12 right-0 hover:text-rose-500 hover:bg-neutral-800' onClick={nextSlide}>&#10095;</button>
            </div>

            <div></div>
        </div>
    )
}
