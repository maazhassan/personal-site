import { ReactComponent as SwitchOn } from '../assets/switch-on.svg';
import { ReactComponent as SwitchOff } from '../assets/switch-off.svg';
import { ReactComponent as SwitchBorder } from '../assets/switch-border.svg';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

function Landing() {
  const [status, setStatus] = useState(1);

  return (
    <div className="h-screen bg-neutral-50 overflow-auto text-center">
      <div className="mt-32 2xl:mt-52 3xl:mt-80 relative">
        {status?
          <SwitchOn 
            className="h-36 2xl:h-44 3xl:h-52 absolute z-10 mx-auto left-0 right-0 my-auto top-0 bottom-0 cursor-pointer" 
            onClick={() => setStatus(-status+1)}
          />
        :
          <SwitchOff 
            className="h-36 2xl:h-44 3xl:h-52 absolute z-10 mx-auto left-0 right-0 my-auto top-0 bottom-0 cursor-pointer"
            onClick={() => setStatus(-status+1)}
          />
        }
        <SwitchBorder className="h-72 2xl:h-80 3xl:h-96 relative z-0 mx-auto left-0 right-0"/>
      </div>
      <div className="mt-32 2xl:mt-52 3xl:mt-80 select-none text-5xl 2xl:text-6xl 3xl:text-7xl">
        <Typewriter
          options={{
            delay: 105
          }}
          onInit={typewriter => {
            typewriter.typeString('WELCOME TO MY CORNER <br class="hidden 2xl:block"/>')
            .typeString('OF THE INTERNET.')
            .start();
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
