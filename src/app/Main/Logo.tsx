import React from 'react'
import Image from 'next/image'
import logo from '../../../public/source/images/logo.svg'

type prop = {
  styles?: string;
}
const Logo = ({styles} : prop) => {
  return (
    <div>
      <Image className={`${styles}`} src={logo} alt='logo svg' height={125} width={125} />
    </div>
  )
}

export default Logo
