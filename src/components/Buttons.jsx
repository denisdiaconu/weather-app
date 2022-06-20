import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Buttons() {

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
            name: 'Sofia'
        },
    ]

  return (
    <div className='items-center justify-around my-1 flex'>
        {famousCities.map((city) => (
            <button key={city.id} className='text-white font-semibold text-lg'>{city.name}</button>
        ))}
    </div>
  )
}

export default Buttons