import { ReactComponent as SwitchOn } from '../assets/switch-on.svg';
import { ReactComponent as SwitchOff } from '../assets/switch-off.svg';
import { ReactComponent as SwitchBorder } from '../assets/switch-border.svg';
import { useState } from 'react';

function Landing() {
  const [status, setStatus] = useState(1);

  return (
    <div className="h-screen bg-neutral-50 overflow-auto">
      <div className="mt-52 3xl:mt-72 relative">
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
        <SwitchBorder className="h-72 relative z-0 mx-auto left-0 right-0"/>
      </div>
    </div>
  );
}

export default Landing;
