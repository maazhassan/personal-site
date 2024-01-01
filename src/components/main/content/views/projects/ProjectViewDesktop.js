import React, { useState } from "react";
import Card from "../../Card";
import ProjectDescription from "./ProjectDescription";

const ProjectViewDesktop = props => {
  const [hoveredProj, setHoveredProj] = useState(null);

  const handleHover = num => {
    setHoveredProj(num);
  }

  return (
    <div className="flex flex-col h-full justify-center gap-3">
      <ProjectDescription 
        selectedProj={hoveredProj}
        data={props.data}
      />
      <div className="flex flex-row justify-center gap-6 xl:gap-12 2xl:gap-24 w-full">
        {props.data.projects.map((e, i) => {
          return (
            <Card
              image={e.image}
              title={e.title}
              stack={e.stack}
              github={e.github}
              onHover={num => handleHover(num)}
              index={i}
              key={i}
            />
          )
        })}
      </div>
    </div>
  );
}

export default ProjectViewDesktop;