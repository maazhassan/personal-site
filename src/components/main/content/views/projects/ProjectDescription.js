import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

const ProjectDescription = ({ selectedProj, description, color, projects }) => {
  const [desc, setDesc] = useState(null);
  
  useEffect(() => {
    if (selectedProj !== null) {
      setDesc(projects[selectedProj].description);
    }
  }, [selectedProj, projects]);

  const conf = {mass: 3, tension: 300, friction: 30, clamp: true};
  const transitions = useTransition(selectedProj === null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: conf
  });

  return (
    <div className="text-2xl 3xl:text-3xl text-neutral-50 w-[41rem] xl:w-[45rem] 3xl:w-[51rem] mx-auto relative h-24 3xl:h-28">
      {
        transitions((styles, item) => 
          item ? (
            <animated.span
              className="absolute w-full h-full mx-auto top-0 left-0 right-0"
              style={styles}
            >
              {description}
              <span className="mt-2 block">
                Hover over a project for a <span className={color}>description</span>, or click 
                on it to go to its <span className={color}>GitHub</span> repository.
              </span>
            </animated.span>
          ) : (
            <animated.span
              className="absolute w-full h-full mx-auto top-0 left-0 right-0"
              style={styles}
            >
              {desc}
            </animated.span>
          )
        )
      }
    </div>
  )
}

export default ProjectDescription;