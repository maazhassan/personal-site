import { useSpring } from 'react-spring';

const useAnimatedUnderline = toggle => {
  const animatedStyle = useSpring({
    transform: toggle ? 'scaleX(1)' : 'scaleX(0)',
  });

  return {
    style: animatedStyle,
  }
}

export default useAnimatedUnderline;