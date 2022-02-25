import React, { useEffect, useState, useContext } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../../hooks/animatedFade";
import Card from "../Card";
import DimensionsContext from "../../../../contexts/dimensionsContext";
import ProjectDescription from "./ProjectDescription";

const MOBILE_CUTOFF = 1100;

const ProjectView = props => {
  const [mountToggle, setMountToggle] = useState(false);
  const [hoveredProj, setHoveredProj] = useState(null);

  useEffect(() => {
    setMountToggle(true);
  }, [])

  const handleHover = num => {
    setHoveredProj(num);
  }

  const {width} = useContext(DimensionsContext);
  const divAnimProps = useAnimatedFade(props.toggle && mountToggle);

  return (
    <animated.div
      className="absolute h-full top-0 text-center mx-auto right-0 left-0"
      style={{width: `${width- (width**2/7500 - 4)}px`, ...divAnimProps.style}}
    >
      {
        width > MOBILE_CUTOFF ? (
          <React.Fragment>
            <ProjectDescription 
              hoveredProj={hoveredProj}
              data={props.data}
            />
            <div className="flex flex-row justify-center gap-6 xl:gap-12 2xl:gap-24 absolute bottom-10 w-full mx-auto left-0 right-0">
              {props.data.projects.map((e, i) => {
                return (
                  <Card
                    image={e.image}
                    title={e.title}
                    stack={e.stack}
                    onClick={() => window.open(e.github, '_blank').focus()}
                    onHover={num => handleHover(num)}
                    index={i}
                    key={i}
                  />
                )
              })}
            </div>
          </React.Fragment>
        ) : (
          ""
        )
      }
    </animated.div>
  );
}

export default ProjectView;