import React from 'react'
import NumButton from './NumButton'
import './ShareStyle.css'

function Input({num, placeholder, start}) {
  return (
    <div className='border-t-2 dark:border-t-0 border-black flex w-full mt-4 items-center dark:text-gray-200'>
    <div className='w-full'>
     
      <div className=' truncate flex justify-between px-4 items-center font-bold myshadowforaggleinput rounded-0 w-full h-12 outline-none pl-4'> <div className='text-black'>{num}</div> <div className='text-black'>{placeholder === null ? 'start guessing the age' : start ? placeholder : 'press start to play' }</div>
    </div>
    </div>
    </div>
  )
}

export default Input;
