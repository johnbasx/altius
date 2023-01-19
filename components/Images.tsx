import { IMAGES_DATA } from '@content/imageImport';
import Image from 'next/image';

import React from 'react';

const Images = () => {
  return (
    <div>
      {IMAGES_DATA.map((data, index) => (
        <Image
          src={data}
          alt={'Image' + index}
          key={'Gallery image' + index * 3}
        />
      ))}
    </div>
  );
};

export default Images;
