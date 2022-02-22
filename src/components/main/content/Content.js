import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import OtherDev from "./OtherDev";
import WebDev from "./WebDev";

const Content = ({ activeSwitch }) => {
  const [shown, setShown] = useState(0);
  const [unmountToggle, setUnmountToggle] = useState(0);

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      setUnmountToggle(null);
      setTimeout(() => {
        setShown(activeSwitch);
        setUnmountToggle(activeSwitch);
      }, 1050);
    }
    else {
      notInitialRender.current = true;
    }
  }, [activeSwitch]);

  return (
    <React.Fragment>
      {shown === 0 && <About toggle={unmountToggle === 0} />}
      {shown === 1 && <WebDev toggle={unmountToggle === 1} />}
      {shown === 2 && <OtherDev toggle={unmountToggle === 2} />}
      {shown === 3 && <Contact toggle={unmountToggle === 3} />}
    </React.Fragment>
  );
}

export default Content;