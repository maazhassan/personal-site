import { config, useTransition } from '@react-spring/web';

const useAnimatedHint = (toggle: boolean) => {
  const transitions = useTransition(toggle, {
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(10px)' },
    config: config.slow,
  });

  return transitions;
};

export default useAnimatedHint;
