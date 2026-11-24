import React, { useEffect, useState } from 'react'
import { getCategories } from '../../utils'

export const Categories = ({ type, selectedCategories, setselectedCategories }) => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories(type).then((data) => {
            setCategories(data)
        })
    }, [type])
const handleChange = (id) => {
    setselectedCategories(prev =>
        prev.includes(id)
            ? prev.filter(item => item !== id)
            : [...prev, id]
    )
}

    return (
    <div className='flex flex-wrap justify-center gap-3'>
    {categories && categories.map((obj) => (
        <label
            key={obj.id}
            className="flex items-center gap-2 bg-base-100 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200 transition"
        >
            <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selectedCategories.includes(obj.id)}
                onChange={() => handleChange(obj.id)}
            />

            <span className="text-sm font-medium text-gray-700">
                {obj.name}
            </span>
        </label>
    ))}
</div>
    )
}