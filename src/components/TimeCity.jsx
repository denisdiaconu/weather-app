import React from 'react'
import { formatLocal } from '../api/weatherApi'

function TimeCity({weather}) {
    console.log(weather)
  return (
    <div>
        <div className='flex flex-row my-7 justify-center items-center'>
            <p className='text-white font-light text-xl'>
                {formatLocal(weather.dt, weather.timezone)}
            </p>
        </div>
        <div className='flex flex-row justify-center items-center my-2'>
            <p className='text-white font-semibold text-3xl'>
                {`${weather.name}, ${weather.sys.country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeCity