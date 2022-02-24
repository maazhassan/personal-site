import { useContext } from 'react';
import { animated } from 'react-spring';
import DimensionsContext from '../../contexts/dimensionsContext';
import useAnimatedPath from '../../hooks/animatedPath';


const Border = props => {
  const dimensions = useContext(DimensionsContext);
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