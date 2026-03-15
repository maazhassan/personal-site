import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Card from '../../Card';
import PaginationArrow from './PaginationArrow';
import Pagination from './Pagination';
import type { ProjectCategory } from '../../../../../types';

interface ProjectViewMobileProps {
  data: ProjectCategory;
  borderInnerWidth: number;
}

const ProjectViewMobile = ({ data, borderInnerWidth }: ProjectViewMobileProps) => {
  const [selectedProj, setSelectedProj] = useState(0);

  const handleChange = (left: boolean) => {
    if (left) setSelectedProj(selectedProj === 0 ? data.projects.length - 1 : selectedProj - 1);
    else setSelectedProj((selectedProj + 1) % data.projects.length);
  };

  const animProps = useSpring({
    transform: `translateX(-${selectedProj * borderInnerWidth}px)`,
  });

  return (
    <>
      <div className="h-full mx-auto overflow-y-auto overflow-x-hidden">
        <animated.div className="flex flex-row h-full" style={animProps}>
          {data.projects.map((project, i) => (
            <div className="h-full relative" key={i}>
              <div className="flex flex-col h-[90%] items-center pt-4 pb-8" style={{ width: borderInnerWidth }}>
                <p className="absolute md:text-xl text-neutral-50 md:top-8 w-[90%]">
                  {project.description}
                </p>
                <div className="absolute top-[40%] w-fit h-fit">
                  <Card
                    image={project.image}
                    title={project.title}
                    stack=""
                    github={project.github}
                    index={i}
                  />
                </div>
              </div>
            </div>
          ))}
        </animated.div>
      </div>
      <PaginationArrow
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 right-0"
        onClick={() => handleChange(false)}
      />
      <PaginationArrow
        className="fill-blue-gray absolute hover:cursor-pointer top-1/2 left-0 rotate-180"
        onClick={() => handleChange(true)}
      />
      <Pagination size={data.projects.length} selected={selectedProj} />
    </>
  );
};

export default ProjectViewMobile;
