import { useEffect, useState } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../../hooks/animatedFade";
import Card from "../Card";

const ProjectView = props => {
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
      <Card />
    </animated.div>
  );
}

export default ProjectView;