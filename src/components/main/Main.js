import { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Border from './Border';
import SwitchBar from './SwitchBar';

const borderColors = ['stroke-blue-gray', 'stroke-blue', 'stroke-green', 'stroke-orange'];

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [color, setColor] = useState(borderColors[0]);

  useEffect(() => {
    setTimeout(() => {
      setColor(borderColors[activeSwitch]);
      setToggle(true);
    }, firstRender ? 0 : 1000);

    setFirstRender(false);
  });

  const handleSwitchClicked = num => {
    activeSwitch === num ? setActiveSwitch(0) : setActiveSwitch(num);
    setToggle(false);
  }

  return (
    <div>
      <TitleBar />
      <div className="mx-auto left-0 right-0 mt-8">
        <Border 
          className={color + " stroke-[4px] fill-transparent"}
          toggle={toggle}
        />
      </div>
      <SwitchBar 
        activeSwitch={activeSwitch}
        onSwitchClicked={num => handleSwitchClicked(num)}
      />
    </div>
  );
}

export default Main;