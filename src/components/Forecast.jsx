import React from 'react'

function Forecast({name}) {
  return (
    <div>
        <div className='flex mt-5 justify-start items-center'>
            <p className='text-white font-semibold'>{name}</p>
        </div>
        <hr />
        <div className='flex flex-row justify-between items-center text-white'>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='font-normal text-sm'> 6:50</p>
                <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-10 my-1' />
                <p className='font-semibold'>15°</p>
            </div>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='font-normal text-sm'> 6:50</p>
                <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-10 my-1' />
                <p className='font-semibold'>15°</p>
            </div>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='font-normal text-sm'> 6:50</p>
                <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-10 my-1' />
                <p className='font-semibold'>15°</p>
            </div>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='font-normal text-sm'> 6:50</p>
                <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-10 my-1' />
                <p className='font-semibold'>15°</p>
            </div>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='font-normal text-sm'> 6:50</p>
                <img src="https://icon-library.com/images/sunny-icon-png/sunny-icon-png-16.jpg" alt="temp img" className='w-10 my-1' />
                <p className='font-semibold'>15°</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Forecast