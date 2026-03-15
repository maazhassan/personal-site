import Switch from '../common/Switch';
import SwitchBorder from './SwitchBorder';
import Typewriter from 'typewriter-effect';
import { animated } from '@react-spring/web';
import useAnimatedFade from '../../hooks/animatedFade';
import { useRef } from 'react';

const FADE_DELAY = 500;

interface LandingProps {
  switchStatus: boolean;
  onSwitchClicked: () => void;
  toggle: boolean;
}

const Landing = ({ switchStatus, onSwitchClicked, toggle }: LandingProps) => {
  const hintTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animProps = useAnimatedFade(toggle, FADE_DELAY);

  return (
    <animated.div
      {...animProps}
      className="overflow-hidden text-center"
    >
      <div className="mt-32 2xl:mt-52 3xl:mt-80 relative">
        <Switch
          className={`h-36 2xl:h-44 3xl:h-52 absolute z-10 mx-auto left-0 right-0 my-auto top-0 bottom-0 ${switchStatus ? 'cursor-pointer' : ''}`}
          onClick={() => { onSwitchClicked(); if (hintTimeout.current) clearTimeout(hintTimeout.current); }}
          isOn={switchStatus}
          styles={`fill-transparent ${switchStatus ? 'stroke-dark-blue' : 'stroke-neutral-50'} stroke-[5px]`}
          accentFill={switchStatus ? '#b4b4b4' : '#39454d'}
          showDetails={true}
        />
        <SwitchBorder
          className="h-72 2xl:h-80 3xl:h-96 z-0 mx-auto left-0 right-0"
          styles={`fill-transparent ${switchStatus ? 'stroke-dark-blue' : 'stroke-neutral-50'} stroke-[5px]`}
        />
      </div>
      <div className={`mt-24 md:mt-36 2xl:mt-56 3xl:mt-80 select-none text-5xl 2xl:text-6xl 3xl:text-7xl ${switchStatus ? 'text-dark-blue' : 'text-neutral-50'}`}>
        <Typewriter
          options={{
            delay: localStorage.getItem('landingSwitch') ? 50 : 105,
          }}
          onInit={typewriter => {
            typewriter
              .typeString('WELCOME TO MY CORNER<br class="hidden 2xl:block"/> OF THE INTERNET.')
              .pauseFor(500)
              .callFunction(() => {
                onSwitchClicked();
              })
              .start();
          }}
        />
      </div>
    </animated.div>
  );
};

export default Landing;
