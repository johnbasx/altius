import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='relative pt-8 pb-6 bg-black'>
      <div
        className='absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none'
        style={{ height: '80px', transform: 'translateZ(0px)' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-black fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <div className='container px-4 mx-auto text-white'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 lg:w-6/12'>
            <h4 className='text-5xl font-bold tracking-tight'>
              Follow us on{' '}
              <span className='text-transparent bg-gradient-to-tr from-pink-500 to-orange-400 bg-clip-text'>
                social media
              </span>
            </h4>
            <h5 className='mt-0 mb-2 text-base text-gray-300'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className='flex mt-6 space-x-2'>
              <button
                className='items-center justify-center p-2 font-normal bg-black rounded-full shadow-lg outline-none text-emerald-400 align-center focus:outline-none'
                type='button'
              >
                <FaWhatsapp className='w-5 h-5' />
              </button>
              <button
                className='items-center justify-center p-2 font-normal text-blue-500 bg-black rounded-full shadow-lg outline-none align-center focus:outline-none'
                type='button'
              >
                <FiFacebook className='w-5 h-5' />
              </button>
              <button
                className='items-center justify-center p-2 font-normal text-pink-400 bg-black rounded-full shadow-lg outline-none align-center focus:outline-none'
                type='button'
              >
                <FiInstagram className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-400' />
        <div className='flex flex-wrap items-center justify-center md:justify-between'>
          <div className='w-full px-4 mx-auto text-center md:w-4/12'>
            <div className='py-1 text-sm font-semibold text-gray-400'>
              Copyright © Altius Fitness Centre
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='w-full max-w-xl px-4 py-6 text-center'>
            <div className='py-2 text-xs font-semibold tracking-widest text-gray-300 uppercase'>
              Powered by
            </div>
            <div className='flex items-center justify-center'>
              <Image
                width={100}
                height={100}
                unoptimized
                priority
                className='w-auto h-14'
                src='/images/foxbeta-w.png'
                alt='Foxbeta Pvt Ltd'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
