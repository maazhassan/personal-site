import { useEffect, useState } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../../hooks/animatedFade";

const Contact = props => {
  const [mountToggle, setMountToggle] = useState(false);

  useEffect(() => {
    setMountToggle(true);
  }, [])

  const divAnimProps = useAnimatedFade(props.toggle && mountToggle);

  return (
    <animated.div
      {...divAnimProps}
      className="absolute w-full h-full top-0" 
    >
      <p className="text-neutral-50 text-3xl">Lorem ipsum dolor sit amet.</p>
    </animated.div>
  );
}

export default Contact;