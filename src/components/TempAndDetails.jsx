import React from 'react'
import { UilSun } from '@iconscout/react-unicons'

function TempAndDetails() {
  return (
    <div>
        <div className='flex flex-row py-7 justify-center items-center '>
            <p className='text-xl text-orange-300 '>temp hardcode</p>
        </div>
        <div className='flex flex-row py-4 text-white justify-around items-center'>
            <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-20' />
            <p className='flex text-5xl'> 25°</p>
        </div>
        <div className='flex flex-row justify-center items-center space-x-2 py-1 text-white text-sm'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium'>3am</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>Set: <span className='font-medium'>2am</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>High: <span className='font-medium'>15°</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>Low: <span className='font-medium'>35°</span></p>
        </div>
    </div>
  )
}

export default TempAndDetails