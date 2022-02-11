import Switch from '../common/Switch';
import SwitchBorder from './SwitchBorder';
import Typewriter from 'typewriter-effect';
import { animated } from 'react-spring';
import useAnimatedFade from '../../hooks/animatedFade';
import useAnimatedHint from '../../hooks/animatedHint';
import { useEffect, useState } from 'react';

const FADE_DELAY = 500;
const HINT_DELAY = !!(localStorage.getItem('landingSwitch')) ? 7000 : 6000;

const Landing = props => {
  const [hintToggle, setHintToggle] = useState(false);

  useEffect(() => {
    const hintTimeout = setTimeout(() => setHintToggle(true), HINT_DELAY);

    return () => clearTimeout(hintTimeout);
  }, []);

  const divAnimProps = useAnimatedFade(props.toggle, FADE_DELAY);
  const hintAnimProps = useAnimatedHint(hintToggle);

  return (
    <animated.div 
      {...divAnimProps}
      className="overflow-hidden text-center"
    >
      <div className="mt-32 2xl:mt-52 3xl:mt-80 mb-2 relative">
        <Switch 
          className={`h-36 2xl:h-44 3xl:h-52 absolute z-10 mx-auto left-0 right-0 my-auto top-0 bottom-0 ${props.switchStatus ? 'cursor-pointer' : ''}`}
          onClick={() => props.onSwitchClicked()}
          isOn={props.switchStatus}
          styles={`fill-transparent ${props.switchStatus ? 'stroke-dark-blue' : 'stroke-neutral-50'} stroke-[5px]`}
          accentFill={props.switchStatus ? '#b4b4b4' : '#39454d'}
          showDetails={true}
        />
        <SwitchBorder 
          className="h-72 2xl:h-80 3xl:h-96 relative z-0 mx-auto left-0 right-0"
          styles={`fill-transparent ${props.switchStatus ? 'stroke-dark-blue' : 'stroke-neutral-50'} stroke-[5px]`}
        />
      </div>
      <animated.p
        {...hintAnimProps}
        className={`text-lg ${props.switchStatus ? 'text-dark-blue' : 'text-neutral-50'}`}
      >
        <b>Click me! ^</b>
      </animated.p>
      <div className={`mt-20 md:mt-32 2xl:mt-52 3xl:mt-80 select-none text-5xl 2xl:text-6xl 3xl:text-7xl ${props.switchStatus ? "text-dark-blue" : "text-neutral-50"}`}>
        <Typewriter
          options={{
            delay: !!(localStorage.getItem('landingSwitch')) ? 50 : 105,
          }}
          onInit={typewriter => {
            typewriter.typeString('WELCOME TO MY CORNER<br class="hidden 2xl:block"/> OF THE INTERNET.')
            .start();
          }}
        />
      </div>
    </animated.div>
  );
}

export default Landing;
