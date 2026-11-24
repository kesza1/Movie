import React, { useEffect, useState } from 'react'
import { getTrendings } from '../../utils'
import { MediaList } from '../Components/MediaList'
import { Loading } from '../Components/Loading'
import { Pagination } from '../Components/Pagination'

export const Home = () => {

    const [trendings, setTrendings] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setTrendings(null)

        getTrendings(page)
            .then(setTrendings)
            .catch(error => console.log(error))

    }, [page])

    return (
        <div>
            {trendings ? (
                <MediaList data={trendings} type='trending' />
            ) : (
                <Loading />
            )}

            <Pagination page={page} setPage={setPage}  maxPage={trendings?.total_pages || 1 }/>
        </div>
    )
}