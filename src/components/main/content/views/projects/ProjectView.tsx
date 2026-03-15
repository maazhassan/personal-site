import { useEffect, useState, useContext } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedFade from '../../../../../hooks/animatedFade';
import DimensionsContext from '../../../../../contexts/dimensionsContext';
import ProjectViewDesktop from './ProjectViewDesktop';
import ProjectViewMobile from './ProjectViewMobile';
import type { ProjectCategory } from '../../../../../types';

const MOBILE_CUTOFF = 1023;

interface ProjectViewProps {
  toggle: boolean;
  data: ProjectCategory;
}

const ProjectView = ({ toggle, data }: ProjectViewProps) => {
  const [mountToggle, setMountToggle] = useState(false);

  useEffect(() => {
    setMountToggle(true);
  }, []);

  const { width } = useContext(DimensionsContext);
  const borderInnerWidth = width - (width ** 2 / 7500 - 4);
  const divAnimProps = useAnimatedFade(toggle && mountToggle);

  return (
    <animated.div
      className="absolute h-full top-0 text-center mx-auto right-0 left-0"
      style={{ width: `${borderInnerWidth}px`, ...divAnimProps.style }}
    >
      {width > MOBILE_CUTOFF ? (
        <ProjectViewDesktop data={data} borderInnerWidth={borderInnerWidth} />
      ) : (
        <ProjectViewMobile data={data} borderInnerWidth={borderInnerWidth} />
      )}
    </animated.div>
  );
};

export default ProjectView;
