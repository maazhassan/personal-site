import { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Border from './Border';
import SwitchBar from './SwitchBar';

const borderColors = ['stroke-blue-gray', 'stroke-blue', 'stroke-green', 'stroke-orange'];

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState(borderColors[0]);
  const [switchReady, setSwitchReady] = useState(true);

  useEffect(() => {
    setTimeout(() => setToggle(true), 200);
  }, []);

  useEffect(() => {
    if (!switchReady) {
      setTimeout(() => {
        setToggle(true);
        setColor(borderColors[activeSwitch]);
      }, 1050);
    }
  });

  const handleSwitchClicked = num => {
    if (switchReady) {
      activeSwitch === num ? setActiveSwitch(0) : setActiveSwitch(num);
      setToggle(false);
      setSwitchReady(false);
      setTimeout(() => setSwitchReady(true), 2100);
    }
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