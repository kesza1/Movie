
import React, { useState, useEffect } from 'react'
import { getSelectedMediaByCateg } from '../../utils'
import { Loading } from '../Components/Loading'
import { MediaList } from '../Components/MediaList'
import { Categories } from '../Components/Categories'
import { Pagination } from '../Components/Pagination'

export const Tvshows = () => {

    const [show, setShow] = useState(null)
    const [selectedCategories, setselectedCategories] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setShow(null)

        getSelectedMediaByCateg('tv', selectedCategories.join(','), page)
            .then(setShow)
            .catch(error => console.log(error))

    }, [selectedCategories, page])

    const handleCategoryChange = (categories) => {
        setselectedCategories(categories)
        setPage(1)
    }

    return (
        <>
            <Categories
                type='tv'
                selectedCategories={selectedCategories}
                setselectedCategories={handleCategoryChange}
            />

            {show ? (
                <MediaList data={show} type='TV' />
            ) : (
                <Loading />
            )}

            <Pagination page={page} setPage={setPage} />
        </>
    )
}
