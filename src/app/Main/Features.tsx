import React from 'react'
import {features} from './data'

const Features = () => {
  return (
    <div className='w-full flex flex-col items-center gap-10 text-center' >
      {
        features.map((item, i)=>{
            return (
              <div className='flex flex-col items-center gap-2' key={i}>
                <h1 className='text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold'>{item.title}</h1>
                <p className='text-light-graysh'>{item.description}</p>
              </div>
            )
        })
      }
    </div>
  )
}

export default Features
