import React from 'react'
import { img_300 } from '../../utils'
import { Rating } from './Rating'

export const MediaCard = ({ media, type }) => {
  return (
    <div className="card bg-gray-300 text-gray-800 w-full shadow-sm">

      <figure>
        <img
          src={img_300 + media.poster_path}
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
  )
}