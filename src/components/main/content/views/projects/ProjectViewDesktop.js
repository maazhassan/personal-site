import React, { useState } from "react";
import Card from "../../Card";
import ProjectDescription from "./ProjectDescription";

const ProjectViewDesktop = props => {
  const [hoveredProj, setHoveredProj] = useState(null);

  const handleHover = num => {
    setHoveredProj(num);
  }

  return (
    <React.Fragment>
      <ProjectDescription 
        selectedProj={hoveredProj}
        data={props.data}
      />
      <div className="flex flex-row justify-center gap-6 xl:gap-12 2xl:gap-24 absolute bottom-10 w-full">
        {props.data.projects.map((e, i) => {
          return (
            <a href={e.github} target="_blank" rel="noreferrer" key={i}>
              <Card
                image={e.image}
                title={e.title}
                stack={e.stack}
                onHover={num => handleHover(num)}
                index={i}
              />
            </a>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default ProjectViewDesktop;