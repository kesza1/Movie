
import React from 'react'
import AliceCarouselModule from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { img_300 } from '../../utils'

const AliceCarousel = AliceCarouselModule.default
export const Carousel = ({ credits }) => {
    console.log(AliceCarouselModule)

    const items = (credits || []).map(obj => (
        <div key={obj.id}>
            <img
                className='w-full h-40 object-contain'
                src={obj.profile_path ? img_300 + obj.profile_path : "noImage.jpg"}
                alt={obj.name}
                onDragStart={(e) => e.preventDefault()}
            />
            <p>{obj.name}</p>
        </div>
    ))

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
                0: { items: 2 },
                600: { items: 3 },
                1024: { items: 6 }
            }}
            controlsStrategy='alternate'
        />
    )
}
