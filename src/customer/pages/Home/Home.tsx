import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

const Home = () => {
  return (
    <div>
     <div className='space-y-5 lg:space-y-10 relative pb-20'>
        <ElectricCategory/>
        <CategoryGrid/>
        

        <div className='pt-20'>
          <h1 className='text-lg lg:text-4x1 font-bold text-primary-color pb-5 lg:pb-10 text-center'>TODAY'S DEAL</h1>
          <Deal/>
        </div>

        <section className='py-20'>
          <h1 className='text-lg lg:text-4x1 font-bold text-primary-color pb-5 lg:pb-10 text-center'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </section>
        
        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full'
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/6caba229-b963-4af8-84b8-f71693be2507.jpg" alt="" />
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4x1 space-y-3'>
            <h1>Sell your products</h1>
            <p className='text-lg md:text-2x1'>With <span className='logo'>Pazaryeri</span></p>
            <div className='pt-6 flex justify-center'>
              <Button startIcon={<Storefront/>} variant='contained' size='large'>Become a Seller</Button>
            </div>
          </div>
        </section>

     </div>
    </div>
  )
}

export default Home
