import React, { useState } from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'

function Inputs({setQuery}) {
  const [ city, setCity ] = useState('')
  const searchClick = () => {
    if (city !== '') setQuery({ q: city })
  }
  const enterClick = (er) => {
    if (er.key === 'Enter') {
      setCity(er.currentTarget.value)
      searchClick()
    }
  }
  const locationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude
        var lon = position.coords.longitude

        setQuery({lat, lon})
      })
    }
  }

  return (
    <div className=' flex flex-row items-center justify-center pt-7'>
        <input type="text" value={city} onKeyDown={(ev) => enterClick(ev)}
          onChange={(c) => setCity(c.currentTarget.value)} className='text-2xl md:w-90 w-8/12 capitalize focus:outline-none font-normal p-1.5 mr-3' placeholder='Search city...' />
        <UilSearch size={30} onClick={searchClick} className='text-white mr-2 cursor-pointer transition ease-in-out hover:scale-125 hover:rotate-12' />
        <UilLocationPinAlt size={30} onClick={locationClick} className='text-white cursor-pointer transition ease-in-out hover:scale-125' />
    </div>
  )
}

export default Inputs