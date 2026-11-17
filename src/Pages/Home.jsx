import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTrendings } from '../../utils'

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
 Home     
    </div>
  )
}


 
