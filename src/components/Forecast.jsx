import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { iconUrlChange } from '../api/weatherApi'

function Forecast({name, list}) {
    console.log(list)
  return (
    <div>
        <div className='flex mt-5 justify-start items-center'>
            <p className='text-white font-semibold'>{name}</p>
        </div>
        <hr />
        <div className='flex flex-row justify-between items-center text-white'>
            {list.map(item => (
                <div key={uuidv4()} className='flex flex-col my-2 justify-center items-center'>
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