
import React from 'react'
import { useState } from 'react'
import { img_300 } from '../../utils'
import { Rating } from './Rating'
import { MyModal } from './MyModal'

export const MediaCard = ({ media, type }) => {

    const [isOpen, setisOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setisOpen(true)}
                className="card bg-gray-300 text-gray-800 w-full shadow-sm cursor-pointer"
            >

                <figure>
                    <img
                        src={media.poster_path ? img_300 + media.poster_path : 'images.png'}
                        alt={media.title || media.name}
                    />
                </figure>

                <div className="card-body">

                    <h2 className="card-title">
                        {media.title || media.name}
                    </h2>

                    <div className="flex justify-between pt-2">

                        <span>
                            {media.media_type || type}
                            {type !== 'trending' && <Rating vote={media.vote_average} />}
                        </span>

                        <span>
                            {media.release_date || media.first_air_date}
                        </span>

                    </div>
                </div>
            </div>

            {isOpen && (
                <MyModal
                    isOpen={isOpen}
                    setisOpen={setisOpen}
                    media={media}
                    type={media.media_type || type}
                />
            )}
        </>
    )
}
