import { useEffect, useState } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../hooks/animatedFade";
import useAnimatedUnderline from "../../../hooks/animatedUnderline";

const About = props => {
  const [mountToggle, setMountToggle] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setMountToggle(true);
  }, [])

  const divAnimProps = useAnimatedFade(props.toggle && mountToggle);
  const uniULAnimProps = useAnimatedUnderline(hover === 0);
  const synULAnimProps = useAnimatedUnderline(hover === 1);

  return (
    <animated.div
      {...divAnimProps}
      className="absolute w-full h-full p-10 md:pt-20 top-0 text-center"
    >
      <p className="text-2xl md:text-3xl text-neutral-50 mx-auto left-0 right-0 w-full md:w-[80%] lg:w-1/2 xl:w-[40%] 2xl:w-1/3">
        A software developer, studying at the&nbsp;
        <a
          href="https://www.ucalgary.ca/" 
          className="text-[#ffcd00] hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {if (window.innerWidth > 768) setHover(0)}}
          onMouseOut={() => setHover(null)}
        >
          University of Calgary
          <animated.span
            {...uniULAnimProps}
            className={`bg-current absolute h-[2px] w-full my-0 bottom-0 left-0`}>  
          </animated.span>
        </a>.
        <br/><br/>

        Current intern at&nbsp;
        <a
          href="https://www.synopsys.com/" 
          className="text-[#5a2a82] hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {if (window.innerWidth > 768) setHover(1)}}
          onMouseOut={() => setHover(null)}
        >
          Synopsys
          <animated.span
            {...synULAnimProps}
            className={`bg-current absolute h-[2px] w-full my-0 bottom-0 left-0`}>
          </animated.span>
        </a>.
        <br/><br/><br/><br/>

        Click a switch below to learn more about me!
      </p>
    </animated.div>
  );
}

export default About;