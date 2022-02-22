import { useState, useEffect } from 'react';
import { animated } from 'react-spring';
import useAnimatedPath from '../../hooks/animatedPath';


const Border = props => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * props.heightScale
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * props.heightScale
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  const animProps = useAnimatedPath(props.toggle);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      className={props.className}
    >
      <animated.path
        {...animProps}
        d={`M${dimensions.width/2 + 1},${dimensions.height-3}
           l-${dimensions.width/2 - ((dimensions.width**2/15000) + 2)},0
           a8,8,0,0,1-8-8
           V11
           a8,8,0,0,1,8-8
           H${dimensions.width/2}`}
      />
      
      <animated.path
        {...animProps}
        d={`M${dimensions.width/2 - 1},3
           l${dimensions.width/2 - ((dimensions.width**2/15000) + 2)},0
           a8,8,0,0,1,8,8
           V${dimensions.height - 11}
           a8,8,0,0,1-8,8
           H${dimensions.width/2}`}
      />
    </svg>
  )
}

export default Border;