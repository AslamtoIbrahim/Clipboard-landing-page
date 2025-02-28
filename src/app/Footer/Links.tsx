import React from 'react'
import {links} from '../Main/data'
const Links = () => {
  return (
    <div className='w-full flex flex-col items-center text-center gap-4 font-baij'>
      {
        links.map((link, index) => (
          <a href={link.url} key={index} className='text-xl text-gray-600 
          hover:underline'>
            {link.title}
          </a>
        ))
      }
    </div>
  )
}

export default Links
