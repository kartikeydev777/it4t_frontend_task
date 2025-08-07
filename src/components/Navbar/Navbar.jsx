import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='absolute w-full z-20 bg-transparent'>
      <div className='flex lg:w-[85vw] text-white mx-auto justify-between items-center p-7'>
        <h3 className='text-xl font-bold'>Logo</h3>

        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className={`ri-menu-line text-2xl ${isOpen ? 'hidden' : 'block'}`}></i>
            <i className={`ri-close-line text-2xl ${isOpen ? 'block' : 'hidden'}`}></i>
          </button>
        </div>

        <ul className='hidden lg:flex gap-8 items-center'>
          <li>
            <select className='nata-sans-500 bg-transparent text-white outline-none'>
              <option>Destinations</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </li>
          <li>
            <select className='nata-sans-500 bg-transparent text-white outline-none'>
              <option>Sports</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </li>
          <li className='nata-sans-500 cursor-pointer'>About Us</li>
          <li className='nata-sans-500 cursor-pointer'>Contact Us</li>
          <li className='nata-sans-500 cursor-pointer flex items-center gap-1'>
            <i className='ri-money-euro-circle-line'></i>/
            <i className='ri-phone-fill'></i>
            <i className='ri-arrow-down-s-line'></i>
          </li>
        </ul>
      </div>



      <div
        className={`lg:hidden w-[85vw] mx-auto text-gray-800 px-3 overflow-hidden transition-all duration-500 ease-in-out bg-white  ${isOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'
          }`}
      >
        <ul className='flex flex-col gap-4 nata-sans-500'>
          <li>
            <select className='w-full bg-transparent text-gray-800 outline-none'>
              <option>Destinations</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </li>
          <li>
            <select className='w-full bg-transparent text-gray-800 outline-none'>
              <option>Sports</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </li>
          <li className='nata-sans-500 cursor-pointer'>About Us</li>
          <li className='nata-sans-500 cursor-pointer'>Contact Us</li>
          <li className='nata-sans-500 cursor-pointer flex items-center gap-1'>
            <i className='ri-money-euro-circle-line'></i>/
            <i className='ri-phone-fill'></i>
            <i className='ri-arrow-down-s-line'></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
