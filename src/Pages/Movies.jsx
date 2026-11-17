import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { getMovies } from '../../utils'
import { useEffect } from 'react'
import { Loading } from '../Components/Loading'
import {MediaList } from '../Components/MediaList'
export const Movies = () => {
const [movie, setMovie] = useState(null)
movie && console.log(movie);

 useEffect(() => {
    getMovies().then(setMovie)


    return
  }, []

  )
  return (
   <>
   {movie ? (
           <MediaList data={movie} type='Movie' />
         ) : (
           <Loading />
         )}
   </>
  )
}

