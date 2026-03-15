import { useSpring } from '@react-spring/web';

const useAnimatedUnderline = (toggle: boolean) => {
  const animatedStyle = useSpring({
    transform: toggle ? 'scaleX(1)' : 'scaleX(0)',
  });

  return {
    style: animatedStyle,
  };
};

export default useAnimatedUnderline;
