'use client'
import React, { useEffect, useState } from 'react'

import endPng from '@/app/assets/end.png'
import Image from 'next/image'

function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)

  // MAke it visible on after a delay
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 10)
  }, [])
  return (


    <div className="relative min-h-screen overflow-auto bg-black">
    <Image
      src={endPng}
      alt="Event Title" 
      priority
      className="fixed top-0 left-0 w-full h-full object-cover z-10"
      />
    <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-20"></div>
    <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-5">

    <div
    className={`absolute top-0 left-0 w-full h-full z-20 pt-5 transition-opacity ease-in duration-700 opacity-0 ${isVisible ? "opacity-100" : "opacity-0"}`}
  >
    <div className='mt-10'>
     <p className='text-white text-4xl font-bold tracking-tight font-bills text-center'>CON<span className='text-[#FF0815]'>T</span>ACT</p>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Sponsors