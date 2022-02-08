import { useState } from 'react';
import { useSpring } from 'react-spring';

const useAnimatedPath = toggle => {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    config: {
      mass: 1,
      friction: 10,
      tension: 30,
      clamp: true
    }
  });

  return {
    style: animatedStyle,
    ref: ref => {
      if (ref) {
        setLength(ref.getTotalLength());
      }
    }
  }
}

export default useAnimatedPath;