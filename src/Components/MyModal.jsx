import React from 'react'
import { useState } from 'react';
import { getCredits, getTrailer, img_500 } from '../../utils';
import { AiFillYoutube } from "react-icons/ai";
import { Carousel } from './Carousel';
import { useEffect } from 'react';
export const MyModal = ({isOpen, setisOpen, media , type , id}) => {
  console.log(media);
  const [trailer ,settrailer] = useState(null)
const [credits, setCredits] = useState(null)
useEffect(() => {
    if (!media || !media.id || !type) return
    getCredits(media.media_type ||type , media.id).then(setCredits)
    getTrailer(type, media.id)
        .then(data => {
            console.log('Összes videó:', data)

            const selectedTrailer = data.find(
                video => video.site === 'YouTube' && video.type === 'Trailer'
            )

            console.log('Kiválasztott trailer:', selectedTrailer)

            settrailer(selectedTrailer || null)
        })
        .catch(error => console.log(error))

}, [media, type])
        credits  && console.log(credits);
        
    return (
    <div>
      <dialog className={`modal ${isOpen ? "modal-open" : " "}`}>
  <div className="modal-box flex flex-col items-center max-w-200 w-fit">
    <div className='p-4 flex flex-col items-center'>
    <img src={img_500+media.backdrop_path} alt={media.title} />
    <h3 className="font-bold text-lg"></h3>
    <span>{media.original_title}</span>
    <span>({media.first_air_date || media.release_date})</span>
        <p className="py-4">{media.overview}</p>
      {trailer && <a className='text-3xl' href={`https://youtube.com/watch?v=${trailer.key}`}><AiFillYoutube /> </a>}
      {credits && <Carousel  credits={credits.slice(0,8)}/>}
    <div className="modal-action p-2">
      <form method="dialog">
       
        <button className="btn" onClick={()=>setisOpen(false)}>Close</button>
      </form>
    </div>
  </div >
  </div>
</dialog>
    </div>
    
  )
}


