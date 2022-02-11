import { useSpring } from 'react-spring';

const useAnimatedFade = (toggle, delay=0) => {
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    delay: delay
  });

  return {
    style: animatedStyle,
  }
}

export default useAnimatedFade;