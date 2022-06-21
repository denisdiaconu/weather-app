import React from 'react'
import { UilSun } from '@iconscout/react-unicons'
import { formatLocal, iconUrlChange } from '../api/weatherApi'

function TempAndDetails({weather}) {
  console.log(weather.weather[0].icon)
  return (
    <div>
        <div className='flex flex-row py-7 justify-center items-center '>
            <p className='text-xl text-orange-300 '>{weather.weather[0].main}</p>
        </div>
        <div className='flex flex-row py-4 text-white justify-around items-center'>
            <img src={iconUrlChange(weather.weather[0].icon)} alt="temp img" className='w-20' />
            <p className='flex text-5xl'>{`${weather.main.temp.toFixed()}°`}</p>
        </div>
        <div className='flex flex-row justify-center items-center space-x-2 py-1 text-white text-sm'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium'>{formatLocal(weather.sys.sunrise, weather.sys.timezone, "hh:mm a")}</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>Set: <span className='font-medium'>{formatLocal(weather.sys.sunset, weather.sys.timezone, "hh:mm a")}</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>High: <span className='font-medium'>{`${weather.main.temp_max.toFixed()}°`}</span></p>
            <p>|</p>
            <UilSun />
            <p className='font-light'>Low: <span className='font-medium'>{`${weather.main.temp_min.toFixed()}°`}</span></p>
        </div>
    </div>
  )
}

export default TempAndDetails