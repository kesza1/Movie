
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { img_300 } from '../../utils'
import AliceCarouselImport from 'react-alice-carousel'
export const Carousel = ({ credits }) => {

    const items = credits.map(obj => (
        <div key={obj.id}>
            <img
                className='w-full h-40 object-contain'
                src={obj.profile_path ? img_300 + obj.profile_path : "noImage.jpg"}
                alt={obj.name}
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
