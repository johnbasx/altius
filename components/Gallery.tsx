import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';

type Image = {
  id: number;
  href: string;
  src: string;
  name: string;
  username: string;
};

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href='#!' className='group'>
      <div className='object-cover w-full overflow-hidden bg-gray-200 rounded-xl aspect-square'>
        <Image
          alt={image.src}
          src={image.src}
          width={100}
          height={100}
          unoptimized
          className={clsx(
            'duration-700 aspect-square w-full ease-in-out object-cover group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {/* <h3 className='mt-4 text-sm text-gray-700'>{image.name}</h3> */}
      {/* <p className='mt-1 text-lg font-medium text-gray-900'>{image.username}</p> */}
    </a>
  );
}

export default BlurImage;
