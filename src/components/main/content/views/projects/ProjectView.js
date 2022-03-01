import React, { useEffect, useState, useContext } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../../../hooks/animatedFade";
import DimensionsContext from "../../../../../contexts/dimensionsContext";
import ProjectViewDesktop from "./ProjectViewDesktop";
import ProjectViewMobile from "./ProjectViewMobile";

const MOBILE_CUTOFF = 1100;

const ProjectView = props => {
  const [mountToggle, setMountToggle] = useState(false);
  
  useEffect(() => {
    setMountToggle(true);
  }, [])

  const {width} = useContext(DimensionsContext);
  const widthCalc = width - (width**2/7500 - 4)
  const divAnimProps = useAnimatedFade(props.toggle && mountToggle);

  return (
    <animated.div
      className="absolute h-full top-0 text-center mx-auto right-0 left-0"
      style={{width: `${widthCalc}px`, ...divAnimProps.style}}
    >
      {
        width > MOBILE_CUTOFF ? (
          <ProjectViewDesktop 
            data={props.data}
          />
        ) : (
          <ProjectViewMobile 
            data={props.data}
            widthCalc={widthCalc}
          />
        )
      }
    </animated.div>
  );
}

export default ProjectView;