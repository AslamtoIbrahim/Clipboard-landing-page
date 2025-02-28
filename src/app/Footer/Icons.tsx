import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
 

const Icons = () => {
  return (
    <div className='w-full p-4 flex justify-evenly items-center '>
      <FontAwesomeIcon icon={faFacebook} className=' icon' />
      <FontAwesomeIcon icon={faTwitter} className=' icon' />
      <FontAwesomeIcon icon={faInstagram} className=' icon' />
      
    </div>
  )
}

export default Icons
