import { animated } from '@react-spring/web';
import useAnimatedFade from '../../../hooks/animatedFade';

interface CardBorderProps {
  className?: string;
  styles: string;
  toggle: boolean;
}

const CardBorder = ({ className, styles, toggle }: CardBorderProps) => {
  const animProps = useAnimatedFade(toggle);

  return (
    <animated.svg
      {...animProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 350"
      className={className}
    >
      <rect className={styles} x="2.5" y="2.5" width="245" height="345" rx="6" />
    </animated.svg>
  );
};

export default CardBorder;
