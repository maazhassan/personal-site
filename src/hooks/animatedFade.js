import { useSpring, config } from 'react-spring';

const useAnimatedFade = (toggle, delay=0, conf=config.default) => {
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    delay: delay,
    config: conf
  });

  return {
    style: animatedStyle,
  }
}

export default useAnimatedFade;