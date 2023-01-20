import { testimonialsData, TestimonialProps } from '@content/testimonialsData';
import Image from 'next/image';
import React from 'react';
import VideoBackground from './VideoBackground';

export const TestimonialCard = ({ ...data }: TestimonialProps) => {
  return (
    <div className='flex'>
      <div className='flex p-6 transition-colors duration-300 border-2 border-solid border-slate-700/30 rounded-3xl bg-slate-700/20 testimonial hover:border-indigo-400 hover:bg-slate-700/30 backdrop-blur-xl'>
        <div className='flex-shrink-0 w-10 h-10 mr-4 overflow-hidden rounded-full md:w-20 md:h-20 md:mr-6'>
          <Image
            height={100}
            width={100}
            src={data.imageSrc}
            alt={'profile image' + data.name + data.company}
            className='object-cover w-full h-full rounded-full'
          />
        </div>
        <div>
          <p className='text-sm text-gray-300 lg:text-sm'>
            &quot;{data.message}&quot;
          </p>
          <div className='mt-6 font-bold uppercase text-gray-50'>
            - {data.name}
          </div>
          <div className='text-gray-400'>{data.company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <section className='absolute inset-0 w-full h-screen'>
        <video
          src='/videos/altius-vid-02.mp4'
          className='object-cover w-full h-full brightness-[0.15]'
          autoPlay
          muted
          loop
          // preload='true'
        />
      </section>
      <section className='relative mt-32'>
        <div className='py-4 md:py-12'>
          <div className='container px-6 mx-auto'>
            <div className='flex flex-wrap justify-center text-center'>
              <div className='max-w-5xl px-4 text-white'>
                <h2 className='font-bold'>
                  <span className='text-6xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>
                    Testimonials
                  </span>
                </h2>
                <p className='m-4 text-lg leading-relaxed'>
                  What our amazing clients has to say about Altius Fitness
                  Centre Porompat
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2 xl:grid-cols-3'>
              {testimonialsData.map((data, index) => (
                <TestimonialCard key={'Testimonial' + data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
