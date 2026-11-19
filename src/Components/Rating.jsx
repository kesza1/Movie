import React from 'react'

export const Rating = ({vote,}) => {
  return (
    <div>
      <div className='rating '>
        {[1,2,3,4,5].map(nr=>
            <div className="mask mask-star bg-orange-400" aria-label={`${nr} star`} aria-current={nr==Math.round(vote/2) ? "true" : "false"}></div>
        )}
      </div>
    </div>
  )
}

 
