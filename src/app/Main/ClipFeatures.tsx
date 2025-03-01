import React from 'react'
import {data} from './data'
import Image from 'next/image'

const ClipFeatures = () => {
  return (
    <div className='w-full flex flex-col items-center gap-12 text-center mt-16 lg:flex-row lg:gap-10 
    xl:justify-center xl:px-28'>
      {
        data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-6 lg:gap-4 lg:justify-center xl:flex-1">
            <Image className='xl:w-16' src={item.image} alt={item.title} width={44} height={40} />
            <h1 className='text-gray-600 xxsm:text-2xl xsm:text-3xl xl:text-4xl font-semibold lg:whitespace-nowrap'>{item.title}</h1>
            <p className='text-light-graysh xl:text-xl'>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ClipFeatures
