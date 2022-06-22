import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { iconUrlChange } from '../api/weatherApi'

function Forecast({name, list}) {
  return (
    <div>
        <div className='flex mt-5 justify-start items-center'>
            <p className='text-white font-semibold ml-4 md:ml-6'>{name}</p>
        </div>
        <hr className='mb-4 w-11/12 mx-auto' />
        <div className='md:flex md:flex-row md:flex-wrap justify-between items-center grid gap-7 md:gap-0 mx-10 md:mx-0 grid-cols-3 text-white'>
            {list.map(item => (
                <div key={uuidv4()} className='flex flex-col my-2 py-2 justify-center items-center px-3 bg-gradient-to-t rounded'>
                    <p className='font-normal text-sm'>{item.title}</p>
                    <img src={iconUrlChange(item.icon)} alt="temp img" className='w-12 my-1' />
                    <p className='font-semibold'>{`${item.temp.toFixed()}°`}</p>
                </div>      
            ))}
        </div>
        
    </div>
  )
}

export default Forecast