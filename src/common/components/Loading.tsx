import React from 'react';
import { ClipLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen bg-[#121212]'>
      <ClipLoader
        color='#1ED760'
        size={30}
        cssOverride={{
          borderWidth: 5,
        }}
      />
    </div>
  );
}
