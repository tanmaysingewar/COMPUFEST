import React from 'react'
import Image from 'next/image'
import ProfilePic from '@/app/assets/profile.png'

function Profile({name, image, post}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src={image} alt="Profile Pic" width={170} height={170} className="mt-10 mx-auto rounded-full" />
        <p className='font-bold tracking-tight text-white font-bills text-3xl mt-5'>{name}</p>
        <p className='font-bold tracking-tight text-white font-bills text-center px-3'>{post}</p>
    </div>
  )
}

export default Profile