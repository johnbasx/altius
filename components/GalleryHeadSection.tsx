import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { TiArrowRight } from 'react-icons/ti';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    delayChildren: 0.2,
    // when: 'beforeChildren',
    type: 'tween',
    staggerChildren: 0.1,
  },
  hidden: {
    opacity: 0,
    y: 0,
  },
};

const GalleryHeadSection = () => {
  return (
    <section id='about' className='relative py-20 text-white bg-black'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-wrap items-center space-y-4'>
          <motion.div
            className='px-2 ml-auto mr-auto md:w-4/12'
            // initial={{ y: 100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0, duration: 0.8, type: 'tween' }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.8, type: 'tween' }}
            data-aos='fade-right'
          >
            <Image
              alt='About Image Altius'
              height={100}
              width={100}
              unoptimized
              priority
              className='object-cover w-full h-full max-w-full transition duration-300 ease-in shadow-lg rounded-2xl'
              src='/images/gallery/altius-14.png'
            />
          </motion.div>

          <div
            className='w-full px-4 ml-auto mr-auto md:w-5/12'
            data-aos='fade-left'
          >
            <motion.div
              className='md:pr-12'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.8, type: 'tween' }}
            >
              <span className='font-semibold tracking-widest text-orange-500 uppercase'>
                Altius Fitness Centre
              </span>
              <motion.h3
                className='text-5xl font-bold'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: 'tween' }}
              >
                To keep{' '}
                <span className='text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>
                  winning
                </span>
                , we have to keep{' '}
                <span className='text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text'>
                  improving.
                </span>
              </motion.h3>
              <motion.p
                className='mt-4 text-sm leading-relaxed sm:text-lg'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: 'tween' }}
              >
                There comes a certain point in life when you have to stop
                blaming other people for how you feel or the misfortunes in your
                life. You can&apos;t go through life obsessing about what might
                have been.
              </motion.p>
            </motion.div>
            {/* <AnimatePresence> */}

            <motion.div
              className='mt-16'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'tween' }}
            >
              <button className='inline-flex items-center px-6 py-3 space-x-2 font-semibold text-black transition-all duration-200 ease-in rounded-full bg-gradient-to-tr to-white from-orange-200 hover:bg-white hover:from-white hover:to-slate-50'>
                <span>Join us now!</span>
                <TiArrowRight className='w-6 h-6' />
              </button>
            </motion.div>
            {/* </AnimatePresence> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeadSection;
