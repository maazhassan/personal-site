import React, { useEffect, useRef, useState } from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import ProjectView from "./views/ProjectView";

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
    <div className={props.className}>
      {shown === 0 && <About toggle={unmountToggle === 0} />}
      {shown === 1 && <ProjectView toggle={unmountToggle === 1} type="web" />}
      {shown === 2 && <ProjectView toggle={unmountToggle === 2} type="other" />}
      {shown === 3 && <Contact toggle={unmountToggle === 3} />}
    </div>
  );
}

export default Content;