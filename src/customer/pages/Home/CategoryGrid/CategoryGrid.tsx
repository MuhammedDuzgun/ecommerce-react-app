import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px=20">
      <div className='col-span-3 row-span-12 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md' 
        src="https://productimages.hepsiburada.net/s/777/200-200/110000776673397.jpg/format:webp"></img>
      </div>
      <div className='col-span-2 row-span-6 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md' 
        src="https://productimages.hepsiburada.net/s/777/200-200/110000667925548.jpg/format:webp"></img>
      </div>
      <div className='col-span-4 row-span-6 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md'  
        src="https://productimages.hepsiburada.net/s/777/200-200/110000667925548.jpg/format:webp"></img>
      </div>
      <div className='col-span-3 row-span-12 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md'  
        src="https://productimages.hepsiburada.net/s/777/200-200/110000667925548.jpg/format:webp"></img>
      </div>
      <div className='col-span-4 row-span-6 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md'  
        src="https://productimages.hepsiburada.net/s/777/200-200/110000667925548.jpg/format:webp"></img>
      </div>
      <div className='col-span-2 row-span-6 text-white'>
        <img className='w-full h-full object-cover object-top rounded-md'  
        src="https://productimages.hepsiburada.net/s/777/200-200/110000667925548.jpg/format:webp"></img>
      </div>
    </div>
  );
};

export default CategoryGrid;
