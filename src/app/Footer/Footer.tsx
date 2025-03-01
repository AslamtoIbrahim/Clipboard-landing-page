import React from 'react'
import Logo from '../Main/Logo'
import Links from './Links'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center gap-6 py-12
     lg:px-16 lg:w-full lg:flex-row lg:justify-around '>
      <Logo styles='w-16 lg:w-20' />
      <Links />
      <Icons />
    </div>
  )
}

export default Footer
