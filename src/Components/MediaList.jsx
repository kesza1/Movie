import React from 'react'
import { MediaCard } from './MediaCard'

export  const MediaList = ({data}) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center pt-4 text-gray-700'>
      {data && data.map(obj=><MediaCard key={obj.id} media={obj}/>)}
    </div>
  )
}


