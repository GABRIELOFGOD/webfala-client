import React from 'react';
import { Link } from 'react-router-dom';
const world = '/images/About us image.png'

const HomeAbout = () => {
  return (
    <div className='md:grid py-mid grid-cols-2'>
        <div>
            <p className="text-secondary font-bold text-[24px]">About Zerab Report</p>
            <p className="text-md font-[400] py-10 text-justify leading-7 text-dark">ZERAB Report is not just a tool; it's a collective effort to empower digital guardianship. We've harnessed cutting-edge technology to create a platform that goes beyond image verification. Our commitment lies in spotlighting the unsung heroes who tirelessly battle against the shadows of misinformation, and we invite you to be part of this transformative journey.</p>
          <Link to='' className="py-2 h-fit w-fit text-small hover:bg-secondary duration-200 rounded-md px-4 border border-primary bg-primary text-white">Read more</Link>
        </div>
        <div className="flex my-auto justify-end h-[368px]">
            <img src={world} alt="About Image" />
        </div>
    </div>
  )
}

export default HomeAbout