import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../../Card";
import PaginationArrow from "./PaginationArrow";
import Pagination from "./Pagination";

const ProjectViewMobile = props => {
  const [selectedProj, setSelectedProj] = useState(0);

  const handleChange = left => {
    if (left) setSelectedProj(selectedProj === 0 ? props.data.projects.length - 1 : selectedProj - 1);
    else setSelectedProj((selectedProj + 1) % props.data.projects.length);
  }

  const animProps = useSpring({
    transform: `translateX(-${selectedProj * props.borderInnerWidth}px)`
  });

  return (
    <React.Fragment>
      <div className="h-full mx-auto overflow-y-auto overflow-x-hidden">
        <animated.div className="flex flex-row h-full" style={animProps}>
          {props.data.projects.map((e, i) => {
            return (
              <div className="h-full relative" key={i}>
                <div className="flex flex-col h-[90%] items-center pt-4 pb-8" style={{width: props.borderInnerWidth}}>
                  <p className="absolute md:text-xl text-neutral-50 md:top-8 w-[90%]">
                    {e.description}
                  </p>
                  <div className="absolute top-[40%] w-fit h-fit">
                    <Card
                      image={e.image}
                      title={e.title}
                      titleSize={e.titleSize ? e.titleSize : 'text-2xl'}
                      stack={''}
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
      <PaginationArrow 
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 right-0"
        onClick={() => handleChange(false)}
      />
      <PaginationArrow 
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 left-0 rotate-180"
        onClick={() => handleChange(true)}
      />
      <Pagination 
        size={props.data.projects.length}
        selected={selectedProj}
      />
    </React.Fragment>
  );
}

export default ProjectViewMobile;