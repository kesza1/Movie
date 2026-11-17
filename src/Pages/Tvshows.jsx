import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getTvShows } from '../../utils';
import { MediaList  } from '../Components/MediaList';
import { Loading } from '../Components/Loading';

  export const Tvshows = () => {
  const [show, setShow] = useState(null)
  show && console.log(show);
  
   useEffect(() => {
      getTvShows().then(setShow)
  
  
      
    }, []
  
    )
  return (
    <div>
      {show ? (
                 <MediaList data={show} type='Show' />
               ) : (
                 <Loading />
               )}
    </div>
  )
}



