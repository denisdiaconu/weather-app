import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Buttons({ setQuery }) {

    const famousCities = [
        {
            id: uuidv4(),
            name: 'Roma'
        },
        {
            id: uuidv4(),
            name: 'Bucharest'
        },
        {
            id: uuidv4(),
            name: 'Parigi'
        },
        {
            id: uuidv4(),
            name: 'Madagascar'
        }
    ]

  return (
    <div className='items-center justify-around md:my-3 flex'>
        {famousCities.map((city) => (
            <button key={city.id} onClick={() => setQuery({ q: city.name })} className='text-white font-semibold text-lg'>{city.name}</button>
        ))}
    </div>
  )
}

export default Buttons