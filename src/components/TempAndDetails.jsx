import React from 'react'
import { UilSun, UilSunset } from '@iconscout/react-unicons'
import { formatLocal, iconUrlChange } from '../api/weatherApi'

function TempAndDetails({weather}) {
  return (
    <div>
        <div className='flex flex-row pt-7 justify-center items-center '>
            <p className='text-xl text-orange-300 '>{weather.weather[0].main}</p>
        </div>
        <div className='flex flex-row py-4 text-white justify-evenly items-center'>
            <img src={iconUrlChange(weather.weather[0].icon)} alt="temp img" className='w-20' />
            <p className='flex text-5xl'>{`${weather.main.temp.toFixed()}°`}</p>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 md:space-x-2 py-1 text-white text-sm'>
          <div className='flex md:flex-row flex-col justify-center items-center space-x-2'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium text'>{formatLocal(weather.sys.sunrise, weather.sys.timezone, "hh:mm a")}</span></p>
          </div>
            <p>|</p>
          <div className='flex md:flex-row flex-col justify-center items-center space-x-2'>
            <UilSunset />
            <p className='font-light'>Set: <span className='font-medium'>{formatLocal(weather.sys.sunset, weather.sys.timezone, "hh:mm a")}</span></p>
          </div>
            <p>|</p>
            <div className='flex md:flex-row flex-col justify-center items-center space-x-2'>
              <UilSun />
              <p className='font-light'>High: <span className='font-medium'>{`${weather.main.temp_max.toFixed()}°`}</span></p>
            </div>
            <p>|</p>
            <div className='flex md:flex-row flex-col justify-center items-center space-x-2'>
              <UilSun />
              <p className='font-light'>Low: <span className='font-medium'>{`${weather.main.temp_min.toFixed()}°`}</span></p>
            </div>
        </div>
    </div>
  )
}

export default TempAndDetails