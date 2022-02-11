import { config, useSpring } from 'react-spring';

const useAnimatedHint = toggle => {
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translateY(0px)' : 'translateY(10px)',
    config: config.slow,
  });

  return {
    style: animatedStyle,
  }
}

export default useAnimatedHint;