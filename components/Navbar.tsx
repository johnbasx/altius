import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { ButtonLink } from '@components/Button';
import { Container } from '@components/Container';
import Image from 'next/image';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className='relative z-10 flex items-center justify-center w-8 h-8 focus:outline-none'>
            <span className='sr-only'>Toggle Navigation</span>
            {!open ? (
              <HiMenuAlt3 className='w-6 h-6 text-white' />
            ) : (
              <HiX className='w-6 h-6 text-white' />
            )}
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='duration-150 ease-in'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Popover.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-md' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                as='ul'
                className='absolute inset-x-0 p-6 mt-4 space-y-4 text-lg origin-top font-semibold bg-gradient-to-br from-black to-purple-900/20 border-[0.05rem] shadow-xl border-slate-50/20 top-full rounded-2xl text-slate-100 ring-1 ring-slate-900/5'
              >
                <li>
                  <Link href='/gallery'>
                    <span className='block w-full' onClick={() => close()}>
                      Gallery
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#testimonials'>
                    <span className='block w-full' onClick={() => close()}>
                      Testimonials
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#aboutus'>
                    <span className='block w-full' onClick={() => close()}>
                      About us
                    </span>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Navbar() {
  return (
    <header className='absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-6 bg-transparent'>
      <Container>
        <nav className='relative z-50 font-semibold'>
          <ul className='flex items-center'>
            <li>
              <Link href='/'>
                <span>
                  <span className='sr-only'>Home</span>
                  <Image
                    src='/images/logo/altius-side-logo.png'
                    alt='Altius Main logo'
                    width={100}
                    height={100}
                    className='w-auto h-10'
                  />
                </span>
              </Link>
            </li>
            <li className='hidden ml-12 md:block'>
              <Link href='/gallery'>
                <span className='px-2 py-1 rounded-lg text-slate-300 hover:text-slate-400'>
                  Gallery
                </span>
              </Link>
            </li>
            <li className='hidden ml-6 md:block'>
              <Link href='#testimonials'>
                <span className='px-2 py-1 rounded-lg text-slate-300 hover:text-slate-400'>
                  Testimonials
                </span>
              </Link>
            </li>
            <li className='hidden ml-6 md:block'>
              <Link href='#pricing'>
                <span className='px-2 py-1 rounded-lg text-slate-300 hover:text-slate-400'>
                  Contact us
                </span>
              </Link>
            </li>
            <li className='invisible ml-auto'>
              <Link href='/login'>
                <span className='px-2 py-1 rounded-lg text-slate-700 hover:text-slate-900'>
                  Sign in
                </span>
              </Link>
            </li>
            <li className='relative ml-auto md:ml-8'>
              <div className='absolute inset-0 w-full h-full duration-1000 scale-105 opacity-75 bg-gradient-to-tr from-orange-500 to-red-400 blur-xl animate-pulse -z-10' />
              <ButtonLink
                href='/register'
                color='blue'
                className='py-2.5 text-xs transition duration-150 ease-in md:text-sm bg-gradient-to-r from-orange-600 to-red-500 text-ellipsis'
              >
                <span>
                  Get started<span className='hidden lg:inline'> today</span>
                </span>
              </ButtonLink>
            </li>
            <li className='ml-5 -mr-1 md:hidden'>
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
