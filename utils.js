import axios from "axios"

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';

const baseURL="https://api.themoviedb.org/3"

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:
        import.meta.env.VITE_TMDB_API_KEY
,        language:"hu-HU"
,include_adult:false
,sort_by:"popularity.desc"
    }
})
export const getMovies = async ()=>{
    
    
    const response =await api.get("/discover/movie")
    return response.data.results

    }
    export const getTvShows = async ()=>{
    
    
    const response =await api.get("/discover/tv")
    return response.data.results

    }

export const getTrendings = async (page=1)=>{
    
    
    const response =await api.get("/trending/all/week", {params:{page}})
    return response.data.results

    

}

export const getMedia = async (type, searchText, page = 1) => {
    const response = await api.get(`/search/${type}`, {
        params: {
            query: searchText,
            page
        }
    })

    return response.data
}

const pageTitle = [
  { type: 'trending', title: 'Popular this week' },
  { type: 'movie', title: 'Movies' },
  { type: 'tv', title: 'TV Series' }
]

export const getCategories = async (type) => {
    const response = await axios.get(
        `${baseURL}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )

    console.log(response.data.genres)

    return response.data.genres
}

export const getSelectedMediaByCateg = async (type, categories, page = 1) => {
    const response = await api.get(`/discover/${type}`, {
        params: {
            with_genres: categories,
            page
        }
    })

    return response.data.results
}

// const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;


export const getTrailer = async (type, id) => {
    const response = await api.get(`/${type}/${id}/videos`)
    return response.data.results
}

export const getCredits = async (type ,id ) =>{
    console.log(type, id);
    const response = await api.get(`/${type}/${id}/credits`)
    return response.data.cast
    
}

export const getPopularPeople = async (page = 1) => {
    const response = await api.get("/person/popular", {
        params: { page }
    })

    return response.data.results
}

export const searchPeople = async (searchText, page = 1) => {
    const response = await api.get(`/search/person`, {
        params: {
            query: searchText,
            page
        }
    })

    return response.data
}

export const getPersonDetails = async (person_id ) =>{
    
    const response = await api.get(`/person/${person_id}`)
    return response.data
    
}

export const getPersonCredits = async (person_id ) =>{
    
    const response = await api.get(`/person/${person_id}/combined_credits`)
    return response.data.cast
    
}



export const getTitle = (type) => {
  const selected = pageTitle.find(obj => obj.type === type)

  return selected ? selected.title : 'Popular this week'
}

