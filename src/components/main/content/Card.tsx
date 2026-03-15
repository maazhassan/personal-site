import { useState } from 'react';
import CardBorder from './CardBorder';

interface CardProps {
  image: string;
  title: string;
  stack: string;
  github: string;
  onHover?: (index: number | null) => void;
  index: number;
  titleSize?: string;
}

const Card = ({ image, title, stack, github, onHover, index }: CardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={github} target="_blank" rel="noreferrer">
      <div
        className="hover:cursor-pointer relative"
        onMouseEnter={() => { if (onHover) { onHover(index); setHover(true); } }}
        onMouseLeave={() => { if (onHover) { onHover(null); setHover(false); } }}
      >
        <CardBorder
          className="h-40 sm:h-48 md:h-52 lg:h-[19rem] 3xl:h-[22rem]"
          styles="fill-transparent stroke-blue-gray stroke-[3px]"
          toggle={hover}
        />
        <div className="flex flex-col absolute w-full h-full items-center top-0">
          <img
            src={image}
            alt="Site logo"
            className="w-24 sm:w-32 md:w-36 lg:mt-8"
            style={{ imageRendering: '-webkit-optimize-contrast' as const }}
          />
          <span className="text-xl sm:text-2xl 3xl:text-3xl text-neutral-50 mt-3 md:mt-7">{title}</span>
          <span className="text-base sm:text-lg 3xl:text-2xl text-text-blue">{stack}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
