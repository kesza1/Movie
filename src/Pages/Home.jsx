import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTrendings } from '../../utils'
import { img_300 , img_500  } from '../../utils'

export const Home = () => {

  const [trendings, setTrendings] = useState(null)
trendings && console.log(trendings);

  useEffect(()=>
  { getTrendings().then(setTrendings)
   
   
    return 
  }, []
   
  )
  return (
    <div>
 {trendings && trendings.map(obj=>
  <img src={img_300+obj.poster_path} alt='kep' />
 )}
    </div>
  )
}


 
