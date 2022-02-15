import { useEffect, useState } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../hooks/animatedFade";

const About = props => {
  const [mountToggle, setMountToggle] = useState(false);

  useEffect(() => {
    setMountToggle(true);
  }, [])

  const animProps = useAnimatedFade(props.toggle && mountToggle);

  return (
    <animated.div
      {...animProps}
      className="absolute w-full h-full p-10 md:pt-20 top-0 text-center"
    >
      <p className="text-2xl md:text-3xl text-neutral-50 mx-auto left-0 right-0 w-full md:w-1/3">
        A software developer, studying at the&nbsp;
        <a
          href="https://www.ucalgary.ca/" 
          className="text-[#ffcd00] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          University of Calgary
        </a>.
        <br/><br/>

        Current intern at&nbsp;
        <a
          href="https://www.synopsys.com/" 
          className="text-[#5a2a82] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Synopsys
        </a>.
        <br/><br/><br/>

        Click a switch below to learn more about me!
      </p>
    </animated.div>
  );
}

export default About;