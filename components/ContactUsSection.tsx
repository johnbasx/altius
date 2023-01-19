import React from 'react';
import { FiSend } from 'react-icons/fi';

const ContactUsSection = () => {
  return (
    <section
      className='relative pt-16 pb-32 flex flex-col content-center items-center justify-center min-h-[95vh]'
      // style={{ minHeight: "95vh" }}
    >
      <div className='absolute top-0 w-full h-full bg-top bg-cover bg-[url(/images/gym-girl-04.jpg)]'>
        <span className='absolute w-full h-full bg-black opacity-75'></span>
      </div>
      <div className='relative block pb-20 text-white'>
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
            <polygon points='2560 0 2560 100 0 100'></polygon>
          </svg>
        </div>
        <div className='container px-4 pt-20 mx-auto pb-14 lg:pt-24 lg:pb-64'>
          <div className='flex flex-wrap justify-center text-center'>
            <div className='w-full px-4 max-w-7xl'>
              <h2 className='text-6xl font-bold text-white'>Contact Us</h2>
              <p className='mt-4 mb-4 text-lg leading-relaxed'>
                Contact us to ask any questions, aquire a membership, talk to
                our trainers or anything else
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative block py-10 lg:pt-0'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap justify-center -mt-4 lg:-mt-64'>
            <div className='w-full px-4'>
              <div
                className='relative flex flex-col w-full min-w-0 mb-6 break-words shadow-lg rounded-3xl'
                data-aos='fade-up-right'
              >
                <div className='flex-auto p-5 text-white border lg:p-10 rounded-3xl bg-gradient-to-tl from-amber-200/50 border-orange-200/20 to-orange-400/50 backdrop-blur-lg'>
                  <h4 className='text-3xl font-bold'>Want to work with us?</h4>
                  <p className='mt-1 mb-4 leading-relaxed'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className='relative w-full mt-8 mb-3'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase'
                      htmlFor='full-name'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-3 text-sm placeholder-gray-400 bg-white rounded-md shadow focus:outline-none focus:shadow-outline'
                      placeholder='Full Name'
                      style={{ transition: 'all 0.15s ease 0s' }}
                    />
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='w-full px-3 py-3 text-sm placeholder-gray-400 bg-white rounded-md shadow focus:outline-none focus:shadow-outline'
                      placeholder='Email'
                      style={{ transition: 'all 0.15s ease 0s' }}
                    />
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      className='w-full px-3 py-3 text-sm placeholder-gray-400 bg-white rounded-md shadow focus:outline-none focus:shadow-outline'
                      placeholder='Type a message...'
                    ></textarea>
                  </div>
                  <div className='mt-6 text-center'>
                    <button
                      className='inline-flex items-center justify-center px-6 py-3 mb-1 mr-1 space-x-2 text-sm font-semibold text-white transition duration-150 ease-in bg-black rounded-md shadow outline-none hover:bg-orange-400 active:bg-gray-700 hover:shadow-lg focus:outline-none'
                      type='button'
                    >
                      <FiSend className='w-4 h-4 text-white' />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
