import React, { useState, useEffect } from 'react'
import { Filter } from '../Components/Filter'
import { SearchBar } from '../Components/SearchBar'
import { getMedia } from '../../utils'
import { MediaList } from '../Components/MediaList'
import { Pagination } from '../Components/Pagination'

export const SearchMedia = () => {

    const [type, setType] = useState('movie')
    const [searchText, setSearchText] = useState('')
    const [media, setMedia] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const handleSearch = () => {
        if (!searchText.trim()) return

        setPage(1)
        getMedia(type, searchText, 1)
            .then(data => {
                setMedia(data.results)
                setMaxPage(data.total_pages)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (!searchText.trim()) return

        getMedia(type, searchText, page)
            .then(data => {
                setMedia(data.results)
                setMaxPage(data.total_pages)
            })
            .catch(error => console.log(error))

    }, [page])

    return (
        <div className='min-h-screen bg-gray-950'>

            <Filter type={type} setType={setType} />

            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                handleSearch={handleSearch}
            />

            {media && <MediaList data={media} type={type} />}

            {media && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    maxPage={maxPage}
                />
            )}

        </div>
    )
}