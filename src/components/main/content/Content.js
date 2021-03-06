import React, { useEffect, useRef, useState } from "react";
import { web, other } from './views/projects/ProjectData';
import About from "./views/About";
import Contact from "./views/Contact";
import ProjectView from "./views/projects/ProjectView";

const Content = props => {
  const [shown, setShown] = useState(0);
  const [unmountToggle, setUnmountToggle] = useState(0);

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      setUnmountToggle(null);
      setTimeout(() => {
        setShown(props.activeSwitch);
        setUnmountToggle(props.activeSwitch);
      }, 1050);
    }
    else {
      notInitialRender.current = true;
    }
  }, [props.activeSwitch]);

  return (
    <React.Fragment>
      {shown === 0 && <About toggle={unmountToggle === 0} />}
      {shown === 1 && <ProjectView toggle={unmountToggle === 1} data={web} />}
      {shown === 2 && <ProjectView toggle={unmountToggle === 2} data={other} />}
      {shown === 3 && <Contact toggle={unmountToggle === 3} />}
    </React.Fragment>
  );
}

export default Content;