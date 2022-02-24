import { animated } from 'react-spring';
import useAnimatedFade from "../../../hooks/animatedFade";

const CardBorder = props => {
  const animProps = useAnimatedFade(props.toggle);

  return (
    <animated.svg
      {...animProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 350"
      className={props.className}
    >
      <rect className={props.styles} x="2.5" y="2.5" width="245" height="345" rx="6" />
    </animated.svg>
  );
}

export default CardBorder;