import React, { useState } from "react";
import Card from "../../Card";
import MobileArrow from "./MobileArrow";
import Pagination from "./Pagination";

const ProjectViewMobile = props => {
  const [selectedProj, setSelectedProj] = useState(0);

  const handleChange = left => {
    if (left) setSelectedProj(selectedProj === 0 ? props.data.projects.length - 1 : selectedProj - 1);
    else setSelectedProj((selectedProj + 1) % props.data.projects.length);
  }

  // react-use-gesture for transitions

  return (
    <React.Fragment>
      <div className="flex flex-col h-full justify-center relative">
        <p className="text-xl text-neutral-50 absolute top-4 w-full">
          {props.data.projects[selectedProj].description}
        </p>
        <div className="flex flex-row justify-center relative">
          <a href={props.data.projects[selectedProj].github} target="_blank" rel="noreferrer">
            <Card 
              image={props.data.projects[selectedProj].image}
              title={props.data.projects[selectedProj].title}
              stack={props.data.projects[selectedProj].stack}
              index={selectedProj}
            />
          </a>
          <MobileArrow 
            className="fill-blue-gray absolute hover:cursor-pointer top-1/2 right-0"
            onClick={() => handleChange(false)}
          />
          <MobileArrow 
            className="fill-blue-gray absolute hover:cursor-pointer top-1/2 left-0 rotate-180"
            onClick={() => handleChange(true)}
          />
        </div>

      </div>
      <Pagination 
        data={props.data}
        selected={selectedProj}
      />
    </React.Fragment>
  );
}

export default ProjectViewMobile;