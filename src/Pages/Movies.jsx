
import React, { useState, useEffect } from 'react'
import { getSelectedMediaByCateg } from '../../utils'
import { Loading } from '../Components/Loading'
import { MediaList } from '../Components/MediaList'
import { Categories } from '../Components/Categories'
import { Pagination } from '../Components/Pagination'

export const Movies = () => {

    const [movie, setMovie] = useState(null)
    const [selectedCategories, setselectedCategories] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setMovie(null)

        getSelectedMediaByCateg('movie', selectedCategories.join(','), page)
            .then(setMovie)
            .catch(error => console.log(error))

    }, [selectedCategories, page])

    const handleCategoryChange = (categories) => {
        setselectedCategories(categories)
        setPage(1)
    }

    return (
        <>
            <Categories
                type='movie'
                selectedCategories={selectedCategories}
                setselectedCategories={handleCategoryChange}
            />

            {movie ? (
                <MediaList data={movie} type='Movie' />
            ) : (
                <Loading />
            )}

            <Pagination page={page} setPage={setPage} />
        </>
    )
}
