import { useState } from "react";
import CardBorder from "./CardBorder";

const Card = props => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={props.github}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="hover:cursor-pointer relative"
        onMouseEnter={() => {if (props.onHover) {props.onHover(props.index); setHover(true)}}}
        onMouseLeave={() => {if (props.onHover) {props.onHover(null); setHover(false)}}}
      >
        <CardBorder 
          className="h-[19rem]"
          styles="fill-transparent stroke-blue-gray stroke-[3px]"
          toggle={hover}
        />
        <div className="flex flex-col absolute w-full h-full items-center top-0">
          <img
            src={props.image}
            alt="Site logo"
            className="w-40 mt-8"
            style={{imageRendering: '-webkit-optimize-contrast'}}
          />
          <span className={`${props.titleSize} text-neutral-50 mt-3 md:mt-7`}>{props.title}</span>
          <span className="text-lg text-text-blue">{props.stack}</span>
        </div>
      </div>
    </a>
  );
}

export default Card;