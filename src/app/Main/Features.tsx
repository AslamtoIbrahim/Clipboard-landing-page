import React from 'react'
import {features} from './data'

const Features = () => {
  return (
    <div className='w-full flex flex-col items-center gap-10 lg:gap-16  text-center lg:items-start ' >
      {
        features.map((item, i)=>{
            return (
              <div className='flex flex-col items-center gap-2 lg:items-start lg:text-start xl:pr-24 ' key={i}>
                <h1 className='text-gray-600 xxsm:text-2xl xsm:text-3xl xl:text-4xl font-semibold'>{item.title}</h1>
                <p className='text-light-graysh xl:text-2xl'>{item.description}</p>
              </div>
            )
        })
      }
    </div>
  )
}

export default Features
