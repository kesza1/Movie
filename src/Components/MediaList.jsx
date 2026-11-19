import React from 'react'
import { MediaCard } from './MediaCard'
import { getTitle } from '../../utils'

export const MediaList = ({ data = [], type }) => {
  return (
    <div className='pt-4 text-gray-700'>

      <h2 className='text-center font-bold text-gray-300 pb-2 text-2xl'>
        {getTitle(type)}
      </h2>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center'>
        {data?.map(obj => (
          <MediaCard key={obj.id} media={obj} type={type} />
        ))}
      </div>

    </div>
  )
}