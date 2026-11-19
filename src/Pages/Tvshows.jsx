import React, { useState, useEffect } from 'react'
import { getTvShows } from '../../utils'
import { MediaList } from '../Components/MediaList'
import { Loading } from '../Components/Loading'

export const Tvshows = () => {
  const [show, setShow] = useState(null)

  useEffect(() => {
    getTvShows().then(setShow)
  }, [])

  return (
    <div>
      {show ? (
        <MediaList data={show} type="tv" />
      ) : (
        <Loading />
      )}
    </div>
  )
}