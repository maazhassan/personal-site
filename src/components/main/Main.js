import TitleBar from './TitleBar';
import { useState } from 'react';
import Border from './Border';
import SwitchBar from './SwitchBar';

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState(0);

  const handleSwitchClicked = num => {
    activeSwitch === num ? setActiveSwitch(0) : setActiveSwitch(num);
  }

  return (
    <div>
      <TitleBar />
      <Border 
        className="stroke-blue-gray stroke-[4px] fill-transparent mx-auto left-0 right-0 mt-8"
      />
      <SwitchBar 
        activeSwitch={activeSwitch}
        onSwitchClicked={num => handleSwitchClicked(num)}
      />
    </div>
  );
}

export default Main;