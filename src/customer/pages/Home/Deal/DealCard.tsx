import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
       <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top'
       src='https://productimages.hepsiburada.net/s/777/200-200/110000814606553.jpg/format:webp' />
       <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Nutella</p>
            <p className='text-2xl font-bold'>20% off</p>
            <p className='text-balance text-lg'>Shop Now</p>
       </div>
    </div>
  )
}

export default DealCard
 