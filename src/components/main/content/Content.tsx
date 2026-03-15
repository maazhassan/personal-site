import { useEffect, useRef, useState } from 'react';
import { web, other } from './views/projects/ProjectData';
import About from './views/About';
import Contact from './views/Contact';
import ProjectView from './views/projects/ProjectView';

interface ContentProps {
  activeSwitch: number;
}

const Content = ({ activeSwitch }: ContentProps) => {
  const [shown, setShown] = useState(0);
  const [unmountToggle, setUnmountToggle] = useState<number | null>(0);

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      setUnmountToggle(null);
      setTimeout(() => {
        setShown(activeSwitch);
        setUnmountToggle(activeSwitch);
      }, 700);
    } else {
      notInitialRender.current = true;
    }
  }, [activeSwitch]);

  return (
    <>
      {shown === 0 && <About toggle={unmountToggle === 0} />}
      {shown === 1 && <ProjectView toggle={unmountToggle === 1} data={web} />}
      {shown === 2 && <ProjectView toggle={unmountToggle === 2} data={other} />}
      {shown === 3 && <Contact toggle={unmountToggle === 3} />}
    </>
  );
};

export default Content;
