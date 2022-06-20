import React from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row items-center justify-center my-6'>
        <input type="text" className='text-2xl w-90 capitalize focus:outline-none font-normal p-1.5 mr-3' placeholder='Search city...' />
        <UilSearch size={30} className='text-white mr-2 cursor-pointer transition ease-in-out hover:scale-125 hover:rotate-12' />
        <UilLocationPinAlt size={30} className='text-white cursor-pointer transition ease-in-out hover:scale-125' />
    </div>
  )
}

export default Inputs