import { animated } from "react-spring";
import useAnimatedHint from "../../../hooks/animatedHint";

const Hint = props => {
  const transitions = useAnimatedHint(props.toggle);
  const Tag = animated[props.tag]

  return transitions(
    (styles, item) => item && (
      <Tag
        style={styles}
        className={props.className}
      >
        {props.text}
      </Tag>
    )
  );
}

export default Hint;