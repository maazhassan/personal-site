import { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Border from './Border';
import SwitchBar from './SwitchBar';
import { animated } from 'react-spring';
import useAnimatedFade from '../../hooks/animatedFade';

const borderColors = ['stroke-blue-gray', 'stroke-blue', 'stroke-green', 'stroke-orange'];
const INIT_BORDER_RENDER_DELAY = 50;
const BORDER_REBOUND_DELAY = 1050;
const SWITCH_READY_DELAY = 2100;

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState(0);
  const [borderToggle, setBorderToggle] = useState(false);
  const [color, setColor] = useState(borderColors[0]);
  const [switchReady, setSwitchReady] = useState(true);
  const [mainFadeToggle, setMainFadeToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => setBorderToggle(true), INIT_BORDER_RENDER_DELAY);
  }, []);

  useEffect(() => {
    if (!switchReady) {
      setTimeout(() => {
        setBorderToggle(true);
        setColor(borderColors[activeSwitch]);
      }, BORDER_REBOUND_DELAY);
    }
  });

  useEffect(() => {
    setMainFadeToggle(true);
  }, [mainFadeToggle]);

  const animationProps = useAnimatedFade(mainFadeToggle, 0);

  const handleSwitchClicked = num => {
    if (switchReady) {
      activeSwitch === num ? setActiveSwitch(0) : setActiveSwitch(num);
      setBorderToggle(false);
      setSwitchReady(false);
      setTimeout(() => setSwitchReady(true), SWITCH_READY_DELAY);
    }
  }

  return (
    <animated.div
      {...animationProps}
    >
      <TitleBar />
      <div className="mx-auto left-0 right-0 mt-8">
        <Border 
          className={color + " stroke-[4px] fill-transparent"}
          toggle={borderToggle}
        />
      </div>
      <SwitchBar 
        activeSwitch={activeSwitch}
        onSwitchClicked={num => handleSwitchClicked(num)}
      />
    </animated.div>
  );
}

export default Main;