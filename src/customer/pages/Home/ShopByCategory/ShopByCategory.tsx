import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap jusitfy-between lg:px-20 gap-7'>
      {[1,2,3,4,5,6,7,8,9,10].map((item) => <ShopByCategoryCard/>)}
    </div>
  )
}

export default ShopByCategory
