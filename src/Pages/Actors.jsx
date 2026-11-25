import React from 'react'
import { useState , useEffect} from 'react'
import { getPopularPeople, searchPeople , getPersonDetails, getPersonCredits} from '../../utils'
import { Pagination } from '../Components/Pagination'

export const Actors = () => {

const [actors, setActors] = useState([])
const [page, setPage] = useState(1)
const [searchText, setSearchText] = useState('')
const [selectedActor, setSelectedActor] = useState(null)
const [actorDetails, setActorDetails] = useState(null)
const [actorCredits, setActorCredits] = useState([])
useEffect(() => {
    const FetchActors = async () => {
        if (searchText === '') {
            const data = await getPopularPeople(page)
            setActors(data)
        } else {
            const data = await searchPeople(searchText, page)
            setActors(data.results)
        }
    }

    FetchActors()
}, [page, searchText])

   const FetchCredits = async () => {
        if (selectedActor) {
            const data = await getPersonCredits(selectedActor.id)
            setActorCredits(data)
        }
    }

    FetchCredits()


useEffect(() => {
    const FetchDetails = async () => {
        if (selectedActor) {
            const data = await getPersonDetails(selectedActor.id)
            setActorDetails(data)
        }
    }

    FetchDetails()
}, [selectedActor])


   return (
    <div className='p-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>
            Színészek
        </h1>
        <input type='text' placeholder='Színészek.. ' value={searchText} onChange={(e) => {
    setSearchText(e.target.value)
    setPage(1)
}} >
        </input>

      <div className='grid grid-cols-5 gap-4'>
    {actors.map((actor) => (
        <div
            key={actor.id}
            onClick={() => setSelectedActor(actor)}
            className='cursor-pointer'
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width='150'
            />

            <h2>{actor.name}</h2>
        </div>
    ))}
</div>

{selectedActor && (
    <div className='fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50'>

        <div className='bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto'>

            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>
                    {actorDetails?.name}
                </h2>

                <button
                    onClick={() => {
                        setSelectedActor(null)
                        setActorDetails(null)
                        setActorCredits([])
                    }}
                    className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg'
                >
                    Bezárás ✕
                </button>
            </div>

            {actorDetails && (
                <>
                    <div className='flex flex-col md:flex-row gap-6 mb-6'>

                        <img
                            src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`}
                            alt={actorDetails.name}
                            className='w-48 h-64 object-cover rounded-xl mx-auto md:mx-0'
                        />

                        <div className='flex-1 text-center md:text-left'>
                            <p className='mb-2'>
                                <span className='font-bold'>Születési dátum:</span> {actorDetails.birthday || 'Ismeretlen'}
                            </p>

                            <p className='mb-4'>
                                <span className='font-bold'>Születési hely:</span> {actorDetails.place_of_birth || 'Ismeretlen'}
                            </p>

                            <h3 className='text-xl font-bold mb-2'>Életrajz</h3>

                            <div className='max-h-40 overflow-y-auto bg-slate-800 p-4 rounded-lg text-left'>
                                <p className='text-gray-300 leading-relaxed'>
                                    {actorDetails.biography || 'Nincs elérhető életrajz.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-slate-700 pt-5'>
                        <h3 className='text-2xl font-bold text-center mb-5'>
                            Filmek és sorozatok
                        </h3>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-96 overflow-y-auto pr-2'>
                            {actorCredits
                                .filter((credit) => credit.media_type === 'movie' || credit.media_type === 'tv' )
                                .map((credit) => (
                                    <div
                                        key={credit.credit_id}
                                        className='bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition'
                                    >
                                        {credit.poster_path && (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${credit.poster_path}`}
                                                alt={credit.title}
                                                className='w-full h-64 object-cover'
                                            />
                                        )}

                                        <div className='p-3'>
                                            <h4 className='font-semibold text-center'>
                                                {credit.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
)}



          <Pagination page={page} setPage={setPage} />
    </div>
   )}