import { useState, useEffect } from 'react';

const Border = props => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.6
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * 0.6
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      className={props.className}
    >
      <path id="border-left"
        d={`M${dimensions.width/2},${dimensions.height-3}
           l-${dimensions.width/2 - dimensions.width/25},0
           a8,8,0,0,1-8-8
           V11
           a8,8,0,0,1,8-8
           H${dimensions.width/2}`}
      />
      
      <path id="border-right"
        d={`M${dimensions.width/2},3
           l${dimensions.width/2 - dimensions.width/25},0
           a8,8,0,0,1,8,8
           V${dimensions.height - 11}
           a8,8,0,0,1-8,8
           H${dimensions.width/2}`}
      />
    </svg>
  )
}

export default Border;