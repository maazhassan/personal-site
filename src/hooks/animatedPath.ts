import { useState, useRef, useEffect } from 'react';
import { useSpring } from '@react-spring/web';

const useAnimatedPath = (toggle: boolean) => {
  const [length, setLength] = useState(0);
  const initialized = useRef(false);

  useEffect(() => {
    if (length > 0) {
      initialized.current = true;
    }
  }, [length]);

  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    immediate: !initialized.current,
    config: {
      mass: 1,
      friction: 14,
      tension: 55,
      clamp: true,
    },
  });

  return {
    style: {
      ...animatedStyle,
      strokeDasharray: length,
    },
    ref: (ref: SVGPathElement | null) => {
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
};

export default useAnimatedPath;
