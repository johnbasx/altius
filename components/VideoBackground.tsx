import React from 'react';

const VideoBackground = () => {
  return (
    <div className='absolute bg-black -z-10 min-w-full min-h-full max-w-none inset-0 h-[100vh] w-auto'>
      <video
        src='/videos/altius-vid-03.mp4'
        className='absolute object-cover min-w-full min-h-full max-w-none inset-0 h-[100vh] w-auto'
        autoPlay
        muted
        loop
        preload='true'
      />
      <div className='absolute z-20 w-full h-full bg-black opacity-80' />
    </div>
  );
};

export default VideoBackground;
