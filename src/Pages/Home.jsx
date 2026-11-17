import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTrendings } from '../../utils'
import { MediaList } from '../Components/MediaList'
import { img_300, img_500 } from '../../utils'
import { Loading } from '../Components/Loading'

export const Home = () => {

    const [trendings, setTrendings] = useState(null)

    useEffect(() => {
        getTrendings()
            .then(setTrendings)
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            {trendings ? (
                <MediaList data={trendings} type='trending' />
            ) : (
                <Loading />
            )}
        </div>
    )
}

