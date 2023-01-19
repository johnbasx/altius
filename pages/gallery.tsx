import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { IMAGES_DATA } from '@content/imageImport';
import BlurImage from '@components/Gallery';
import Footer from '@components/Footer';
import GalleryHeadSection from '@components/GalleryHeadSection';

const GalleryPage = () => {
  return (
    <div className='mt-20'>
      <GalleryHeadSection />

      <div className='max-w-2xl px-8 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-9xl lg:px-8'>
        <div className='py-4 mt-10 mb-20 space-y-4 text-center'>
          <h1 className='text-5xl font-bold text-center text-white'>
            <span className='mr-3 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text'>
              Altius
            </span>
            Gallery
          </h1>
          <p className='text-gray-300'>
            Let&apos; embark a new jouney together, while also cherishing the
            journey we have come along.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {IMAGES_DATA.map((image, index) => (
            <BlurImage key={'Altius Gallery image' + index * 3} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
