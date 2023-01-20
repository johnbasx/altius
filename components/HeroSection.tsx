import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import VideoBackground from './VideoBackground';

const HeroSection = () => {
  return (
    <div
      className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[95vh] overflow-hidden'
      // style={{ minHeight: "95vh" }}
    >
      {/* <div className='absolute top-0 w-full h-full bg-top bg-cover bg-[url(/images/gym-girl-orange.jpg)]'>
        <span
          id='blackOverlay'
          className='absolute w-full h-full bg-black opacity-75'
        ></span>
      </div> */}
      <VideoBackground />

      <div className='container relative mx-auto' data-aos='fade-in'>
        <div className='flex flex-wrap items-center'>
          <motion.div
            className='w-full px-4 ml-auto mr-auto text-center lg:w-6/12'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.8, type: 'tween' }}
          >
            <div>
              <h1 className='my-16 font-extrabold leading-none text-center select-none sm:my-10 text-7xl sm:text-10xl tracking-tightest'>
                <motion.span
                  data-content='Faster.'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0, duration: 0.8, type: 'tween' }}
                  className='relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1'
                >
                  <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1'>
                    Faster.
                  </span>
                </motion.span>
                <motion.span
                  data-content='Higher.'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.8, type: 'tween' }}
                  className='relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2'
                >
                  <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2'>
                    Higher.
                  </span>
                </motion.span>
                <motion.span
                  data-content='Stronger.'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, type: 'tween' }}
                  className='relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3'
                >
                  <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3'>
                    Stronger.
                  </span>
                </motion.span>
              </h1>
              <motion.p
                className='mt-4 text-sm text-gray-300 sm:text-lg'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: 'tween' }}
              >
                Welcome to Altius Fitness Centre. <br /> We are a fitness and
                training center that focuses on pushing you to your absolute
                limit. Come and join the Altius Fitness family
              </motion.p>
              <motion.a
                href='#'
                transition={{ delay: 0.2, duration: 0.8, type: 'tween' }}
                className='bg-orange-400/10 border-[0.05rem] border-orange-100/20 backdrop-blur-md text-white font-semibold w-full sm:w-auto hover:text-white px-4 py-3 hover:border-orange-400 rounded-md inline-block mt-10 cursor-pointer transition-all duration-200'
              >
                Join us now!
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className='absolute bottom-0 left-0 right-0 top-auto w-full h-20 overflow-hidden pointer-events-none'
        style={{ height: '70px', transform: 'translateZ(0px)' }}
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
          <polygon points='2560 0 2560 100 0 100'></polygon>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
