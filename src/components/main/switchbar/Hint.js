import { useEffect, useState } from "react";
import { animated } from "react-spring";
import useAnimatedHint from "../../../hooks/animatedHint";

const Hint = props => {
  const animatedProps = useAnimatedHint(props.toggle);

  return (
    <animated.span
      {...animatedProps}
      className={`text-sm text-blue-gray absolute ${props.right} top-20 w-28 text-center`}
    >
      Click again to go back, or click a different switch
    </animated.span>
  );
}

export default Hint;