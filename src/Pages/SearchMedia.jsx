import React, { useState } from 'react'
import { Filter } from '../Components/Filter'
import { SearchBar } from '../Components/SearchBar'
import { getMedia } from '../../utils'
import { MediaList } from '../Components/MediaList'

export const SearchMedia = () => {
  const [type, setType] = useState('movie')
  const [searchText, setSearchText] = useState('')
  const [media, setMedia] = useState(null)

  const handleSearch = () => {
    if (searchText.trim().length === 0) return

    getMedia(type, searchText).then(setMedia)
  }

  return (
    <div className='min-h-screen bg-gray-950'>

      <Filter type={type} setType={setType} />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />

      {media && <MediaList data={media} type={type} />}

    </div>
  )
}