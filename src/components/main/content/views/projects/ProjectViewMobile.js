import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../../Card";
import MobileArrow from "./MobileArrow";
import Pagination from "./Pagination";

const ProjectViewMobile = props => {
  const [selectedProj, setSelectedProj] = useState(0);

  const handleChange = left => {
    if (left) setSelectedProj(selectedProj === 0 ? props.data.projects.length - 1 : selectedProj - 1);
    else setSelectedProj((selectedProj + 1) % props.data.projects.length);
  }

  const descSize = window.innerHeight > 700 ? 'text-lg' : 'text-base';

  const animProps = useSpring({
    transform: `translateX(-${selectedProj * props.widthCalc}px)`
  });

  return (
    <React.Fragment>
      <div className="h-full mx-auto overflow-y-auto overflow-x-hidden">
        <animated.div className="flex flex-row h-full" style={animProps}>
          {props.data.projects.map((e, i) => {
            return (
              <div className="flex flex-col h-full justify-center relative" key={i}>
                <div style={{width: props.widthCalc}}>
                  <p className={`${descSize} md:text-xl text-neutral-50 absolute top-4 md:top-8 w-[90%] md:w-1/2 mx-auto right-0 left-0`}>
                    {e.description}
                  </p>
                  <div className="w-[60%] md:w-[30%] mx-auto mt-20">
                    <Card
                      image={e.image}
                      title={e.title}
                      titleSize={e.titleSize ? e.titleSize : 'text-2xl'}
                      stack={e.stack}
                      github={e.github}
                      index={i}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </animated.div>
      </div>
      <MobileArrow 
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 right-0"
        onClick={() => handleChange(false)}
      />
      <MobileArrow 
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 left-0 rotate-180"
        onClick={() => handleChange(true)}
      />
      <Pagination 
        data={props.data}
        selected={selectedProj}
      />
    </React.Fragment>
  );
}

export default ProjectViewMobile;