import { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Border from './Border';
import SwitchBar from './switchbar/SwitchBar';
import { animated } from 'react-spring';
import useAnimatedFade from '../../hooks/animatedFade';
import Content from './content/Content';
import { DimensionsProvider } from '../../contexts/dimensionsContext';

const borderColors = ['stroke-blue-gray', 'stroke-blue', 'stroke-green', 'stroke-orange'];
const INIT_BORDER_RENDER_DELAY = 50;
const BORDER_REBOUND_DELAY = 1050;
const SWITCH_READY_DELAY = 2100;
const BORDER_HEIGHT_SCALE = 0.615;

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState(0);
  const [borderToggle, setBorderToggle] = useState(false);
  const [color, setColor] = useState(borderColors[0]);
  const [switchReady, setSwitchReady] = useState(true);
  const [mainFadeToggle, setMainFadeToggle] = useState(false);

  useEffect(() => {
    setMainFadeToggle(true);
    setTimeout(() => setBorderToggle(true), INIT_BORDER_RENDER_DELAY);
  }, []);

  useEffect(() => {
    if (!switchReady) {
      setTimeout(() => {
        setBorderToggle(true);
        setColor(borderColors[activeSwitch]);
      }, BORDER_REBOUND_DELAY);
    }
  }, [switchReady, activeSwitch]);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * BORDER_HEIGHT_SCALE
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * BORDER_HEIGHT_SCALE
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [dimensions]);

  const handleSwitchClicked = num => {
    if (switchReady) {
      activeSwitch === num ? setActiveSwitch(0) : setActiveSwitch(num);
      setBorderToggle(false);
      setSwitchReady(false);
      setTimeout(() => setSwitchReady(true), SWITCH_READY_DELAY);
    }
  }

  const animProps = useAnimatedFade(mainFadeToggle);

  return (
    <animated.div
      {...animProps}
    >
      <TitleBar />
      <div className="mt-4 md:mt-6 3xl:mt-8 relative">
        <DimensionsProvider value={dimensions}>
          <Border 
            className={color + " stroke-[4px] fill-transparent"}
            toggle={borderToggle}
          />
          <Content 
            activeSwitch={activeSwitch}
          />
        </DimensionsProvider>
      </div>
      <SwitchBar
        className="mt-2 md:mt-5 3xl:mt-10"
        activeSwitch={activeSwitch}
        onSwitchClicked={num => handleSwitchClicked(num)}
        switchReady={switchReady}
      />
    </animated.div>
  );
}

export default Main;