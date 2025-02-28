import React from 'react'
import {data} from './data'
import Image from 'next/image'

const ClipFeatures = () => {
  return (
    <div className='w-full flex flex-col items-center gap-12 text-center mt-16'>
      {
        data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            <Image src={item.image} alt={item.title} width={44} height={40} />
            <h1 className='text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold'>{item.title}</h1>
            <p className='text-light-graysh'>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ClipFeatures
