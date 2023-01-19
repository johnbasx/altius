import React from 'react';
import Image from 'next/image';
import { FaDumbbell, FaHardHat, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id='about' className='relative py-20 text-white bg-black'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='px-4 ml-auto mr-auto md:w-4/12' data-aos='fade-right'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-lg'
              src='https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            />
          </div>

          <div
            className='w-full px-4 ml-auto mr-auto md:w-5/12'
            data-aos='fade-left'
          >
            <div className='md:pr-12'>
              <span className='text-xs font-semibold tracking-widest text-orange-500 uppercase'>
                About our gym
              </span>
              <h3 className='text-5xl font-bold'>
                <span className='text-transparent bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text'>
                  Safe{' '}
                </span>
                Body Building
              </h3>
              <p className='mt-4 text-sm leading-relaxed sm:text-lg'>
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and
                you&apos;re good to go.
              </p>
              <ul className='mt-6 list-none'>
                <li className='flex items-center py-2'>
                  <FaDumbbell className='w-6 h-6 mr-3 text-orange-500' />
                  <p className='text-sm md:text-xl'>
                    The latest & greatest gym equipment
                  </p>
                </li>
                <li className='flex items-center py-2'>
                  <FaHardHat className='w-6 h-6 mr-3 text-orange-500' />
                  <p className='text-sm md:text-xl'>
                    5-inch, quality foam floor padding
                  </p>
                </li>
                <li className='flex items-center py-2'>
                  <FaUsers className='w-6 h-6 mr-3 text-orange-500' />
                  <p className='text-sm md:text-xl'>
                    Highly professional trainers
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
