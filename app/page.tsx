import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-'>
    <Image
      src='/background-home-desktop.jpg'
      alt='Home Background'
      width={840}
      height={100}
      className='w-full h-full object-cover'
    />
    </div>
  )
}

export default Home