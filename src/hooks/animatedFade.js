import { useSpring } from 'react-spring';

const useAnimatedFade = (toggle, delay) => {
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    delay: delay
    // config: {
    //   mass: 1,
    //   friction: 10,
    //   tension: 30,
    //   clamp: true
    // }
  });

  return {
    style: animatedStyle,
  }
}

export default useAnimatedFade;