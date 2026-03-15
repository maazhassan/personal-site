import { useSpring, config, type SpringConfig } from '@react-spring/web';

const useAnimatedFade = (toggle: boolean, delay = 0, conf: SpringConfig = config.default) => {
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    delay,
    config: conf,
  });

  return {
    style: animatedStyle,
  };
};

export default useAnimatedFade;
