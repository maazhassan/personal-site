import { useState } from "react";
import CardBorder from "./CardBorder";

const Card = props => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="inline-block hover:cursor-pointer relative"
      onMouseEnter={() => {props.onHover(props.index); setHover(true)}}
      onMouseLeave={() => {props.onHover(null); setHover(false)}}
      onClick={() => props.onClick()}
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
        <span className="text-3xl text-neutral-50 mt-7">{props.title}</span>
        <span className="text-xl text-text-blue">{props.stack}</span>
      </div>
    </div>
  );
}

export default Card;