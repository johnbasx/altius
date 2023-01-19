import { trainersData } from '@content/trainers';
import Image from 'next/image';
import React from 'react';

export type TrainerProps = {
  id: number;
  name: string;
  designation: string;
  type: string;
  imageSrc: string;
};
const TrainerCard = ({ ...data }: TrainerProps) => {
  return (
    <div className=''>
      <Image
        width={100}
        height={100}
        alt='Trainer Image'
        src={data.imageSrc}
        className='object-cover h-[30vh] w-auto mx-auto shadow-lg rounded-2xl'
      />
      <div className='pt-2 text-center text-white'>
        <h5 className='text-xl font-bold'>{data.name}</h5>
        <p className='mt-1 text-xs font-semibold text-transparent uppercase bg-gradient-to-r from-teal-400 to-teal-700 bg-clip-text'>
          {data.type}
        </p>
      </div>
    </div>
  );
};

const TrainersSection = () => {
  return (
    <section className='pt-20 pb-48'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap justify-center mb-24 text-center'>
          <div className='w-full max-w-5xl px-4 text-white'>
            <h2 className='text-5xl font-bold'>
              Meet Our{' '}
              <span className='text-6xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>
                Amazing Trainers
              </span>
            </h2>
            <p className='m-4 text-lg leading-relaxed'>
              Our trainers are are here to dedicate the time and effort that you
              need to get in the best shape of your life
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 xl:grid-cols-5'>
          {trainersData.map((data, index) => (
            <TrainerCard key={index * data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
