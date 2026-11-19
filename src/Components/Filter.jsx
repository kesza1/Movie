import React from 'react'

export const Filter = ({ type, setType }) => {
  return (
    <div className='flex justify-center gap-4 p-4'>

      <label className='flex items-center gap-2'>
        <input
          type="radio"
          name="media"
          value="movie"
          className='radio radio-warning'
          checked={type === 'movie'}
          onChange={(e) => setType(e.target.value)}
        />
        Movies
      </label>

      <label className='flex items-center gap-2'>
        <input
          type="radio"
          name="media"
          value="tv"
          className='radio radio-warning'
          checked={type === 'tv'}
          onChange={(e) => setType(e.target.value)}
        />
        TV Shows
      </label>

    </div>
  )
}