import React from 'react';
import { HeaderNav } from '../utils/constants';
import { Link, NavLink } from 'react-router-dom';
const logo = '/images/zerab logo.png'

const Header = () => {
  return (
    <div className='flex shadow-sm justify-between px-mid py-tip'>
      <img className='w-[120px] my-auto h-fit' src={logo} alt="Logo" />
        <div className="gap-10 head text-lightBlack my-auto flex">
          {
            HeaderNav.map(nav => (
              <NavLink to={nav.path} className='hover:text-primary' key={nav.id}>{nav.name}</NavLink>
            ))
          }
        </div>
        <Link to='' className="py-2 h-fit w-fit text-small rounded-md px-4 bg-primary text-white">Make a Report</Link>
    </div>
  )
}

export default Header