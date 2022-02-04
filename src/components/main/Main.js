import TitleBar from './TitleBar';
import { useState } from 'react';
import Border from './Border';

const Main = () => {
  return (
    <div className="">
      <TitleBar />
      <div className="mt-10 relative">
        <Border 
          className="stroke-blue-gray stroke-[4px] fill-transparent mx-auto left-0 right-0"
        />
      </div>
      <div className="relative text-center mt-10">
        <span className="text-neutral-50 text-5xl">Hello</span>  
      </div>
    </div>
  );
}

export default Main;