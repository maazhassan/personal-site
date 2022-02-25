import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

const ProjectDescription = ({ hoveredProj, data }) => {
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    if (hoveredProj !== null) {
      setDesc(data.projects[hoveredProj].description);
    }
  }, [hoveredProj])

  const conf = {mass: 3, tension: 300, friction: 30, clamp: true};
  const transitions = useTransition(hoveredProj === null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: conf
  });

  return (
    <p className="text-2xl text-neutral-50 mt-16 w-[41rem] mx-auto relative">
      {
        transitions((styles, item) => 
          item ? (
            <animated.span
              className="absolute w-full h-full mx-auto top-0 left-0 right-0"
              style={styles}
            >
              {data.description}
              Hover over a project for a <span className={data.color}>description</span>, or click 
              on it to go to its <span className={data.color}>GitHub</span> repository.
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
    </p>
  )
}

export default ProjectDescription;