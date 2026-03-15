import type { ReactNode } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedHint from '../../../hooks/animatedHint';

interface HintProps {
  className?: string;
  text: ReactNode;
  toggle: boolean;
  tag: 'p' | 'span';
}

const Hint = ({ toggle, tag, className, text }: HintProps) => {
  const transitions = useAnimatedHint(toggle);
  const Tag = tag === 'p' ? animated.p : animated.span;

  return transitions(
    (styles, item) =>
      item && (
        <Tag style={styles} className={className}>
          {text}
        </Tag>
      ),
  );
};

export default Hint;
