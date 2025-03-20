import React from 'react'
import ArrowRight from '../../../public/arrow_right.svg'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";


const Promo = () => {
  return (
    <div className='bg-black text-white text-xs md:text-sm text-center py-1 md:flex justify-center items-center gap-2'>
        Have a project in mind? We have 30% discount for startup software. <span className='flex items-center gap-1 justify-center md:justify-start'>Contact us now <FaArrowRightLong /></span>

    </div>
  )
}

export default Promo
