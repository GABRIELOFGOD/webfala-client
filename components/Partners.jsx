import React from 'react';
const image1 = '/images/logo 1.png'
const image2 = '/images/logo 2.png'
const image3 = '/images/logo 3.png'
const image4 = '/images/logo 4.png'
const image5 = '/images/logo 5.png'

const Partners = () => {
  return (
    <div>
      <p className="font-bold text-center text-[48px] text-darkGold">Our Partners</p>
      <div className='flex justify-between py-5 gap-8'>
        <img src={image1} className='h-[70px] w-fit' alt="" />
        <img src={image2} className='h-[70px] w-fit' alt="" />
        <img src={image3} className='h-[60px] w-fit' alt="" />
        <img src={image4} className='h-[60px] w-fit' alt="" />
        <img src={image5} className='h-[60px] w-fit' alt="" />
      </div>
    </div>
  )
}

export default Partners