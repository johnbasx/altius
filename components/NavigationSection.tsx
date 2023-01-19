import React, { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt3 } from 'react-icons/hi';
import clsx from 'clsx';

const NavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  return (
    <nav className='absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg'>
      <div className='container flex flex-wrap items-center justify-center px-4 mx-auto'>
        <div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='inline-block py-2 mr-4 text-lg font-bold leading-relaxed text-white uppercase whitespace-no-wrap'
            href='#!'
          >
            <Image
              className='w-auto h-12 sm:h-20'
              width={100}
              height={100}
              unoptimized
              priority
              src='/images/logo/altius-side-logo.png'
              alt='ALTIUS Fitness Centre logo'
            />
          </a>
          <button
            className='block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none'
            type='button'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenuAlt3 className='text-white h-7 w-7' />
          </button>
        </div>
        {menuOpen ? (
          <div
            className={clsx(
              'items-center bg-white lg:bg-transparent lg:shadow-none',
              menuOpen ? 'flex-grow lg:flex bg-white' : 'hidden'
            )}
            id='example-collapse-navbar'
          >
            <ul className='flex flex-col list-none lg:flex-row lg:ml-auto'>
              {/* <!-- Icon 1 --> */}
              <li className='flex items-center'>
                <a
                  className='flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2'
                  href='#pablo'
                >
                  <i className='text-lg text-orange-500 fab fa-facebook leading-lg'></i>
                  <span className='inline-block ml-2 lg:hidden'>Share</span>
                </a>
              </li>
              {/* <!-- Icon 2 --> */}
              <li className='flex items-center'>
                <a
                  className='flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2'
                  href='#pablo'
                >
                  <i className='text-lg text-orange-500 fab fa-twitter leading-lg'></i>
                  <span className='inline-block ml-2 lg:hidden'>Tweet</span>
                </a>
              </li>
              {/* <!-- Icon 3 --> */}
              <li className='flex items-center'>
                <a
                  className='flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2'
                  href='#pablo'
                >
                  <i className='text-lg text-orange-500 fab fa-linkedin leading-lg'></i>
                  <span className='inline-block ml-2 lg:hidden'>Profile</span>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default NavigationSection;
