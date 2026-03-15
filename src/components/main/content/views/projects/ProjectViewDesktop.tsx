import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Card from '../../Card';
import ProjectDescription from './ProjectDescription';
import PaginationArrow from './PaginationArrow';
import Pagination from './Pagination';
import type { ProjectCategory, Project } from '../../../../../types';

interface ProjectViewDesktopProps {
  data: ProjectCategory;
  borderInnerWidth: number;
}

const ProjectViewDesktop = ({ data, borderInnerWidth }: ProjectViewDesktopProps) => {
  const NUM_CHUNKS = Math.ceil(data.projects.length / 4);

  const [hoveredProj, setHoveredProj] = useState<number | null>(null);
  const [selectedChunk, setSelectedChunk] = useState(0);

  const handleHover = (num: number | null) => {
    setHoveredProj(num);
  };

  const handleChange = (left: boolean) => {
    if (left) setSelectedChunk(selectedChunk === 0 ? NUM_CHUNKS - 1 : selectedChunk - 1);
    else setSelectedChunk((selectedChunk + 1) % NUM_CHUNKS);
  };

  const chunkProjects = (chunkSize: number): Project[][] => {
    const chunked: Project[][] = [];
    for (let i = 0; i < data.projects.length; i += chunkSize) {
      chunked.push(data.projects.slice(i, i + chunkSize));
    }
    return chunked;
  };

  const CHUNKED_PROJS = chunkProjects(4);

  const animProps = useSpring({
    transform: `translateX(-${selectedChunk * borderInnerWidth}px)`,
  });

  return (
    <div className="flex flex-col h-full justify-center gap-4 overflow-x-hidden relative">
      <ProjectDescription
        selectedProj={hoveredProj}
        description={data.description}
        color={data.color}
        projects={CHUNKED_PROJS[selectedChunk]}
      />
      <animated.div className="flex flex-row" style={animProps}>
        {CHUNKED_PROJS.map((chunk, i) => (
          <div key={i}>
            <div className="flex flex-row justify-center gap-4 xl:gap-10 2xl:gap-24" style={{ width: borderInnerWidth }}>
              {chunk.map((project, j) => (
                <Card
                  image={project.image}
                  title={project.title}
                  stack={project.stack}
                  github={project.github}
                  onHover={(num) => handleHover(num)}
                  index={j}
                  key={j}
                />
              ))}
            </div>
          </div>
        ))}
      </animated.div>
      {NUM_CHUNKS > 1 && (
        <>
          <PaginationArrow
            className="fill-blue-gray hover:fill-slate-300 absolute hover:cursor-pointer top-1/2 right-0"
            onClick={() => handleChange(false)}
          />
          <PaginationArrow
            className="fill-blue-gray hover:fill-slate-300 absolute hover:cursor-pointer top-1/2 left-0 rotate-180"
            onClick={() => handleChange(true)}
          />
          <Pagination size={NUM_CHUNKS} selected={selectedChunk} />
        </>
      )}
    </div>
  );
};

export default ProjectViewDesktop;
