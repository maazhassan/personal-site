import { useEffect, useState } from "react";
import { animated } from 'react-spring';
import useAnimatedFade from "../../../../hooks/animatedFade";
import useAnimatedUnderline from "../../../../hooks/animatedUnderline";

const About = props => {
  const [mountToggle, setMountToggle] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setMountToggle(true);
  }, [])

  const divAnimProps = useAnimatedFade(props.toggle && mountToggle);
  const gitULAnimProps = useAnimatedUnderline(hover === 0);
  const liULAnimProps = useAnimatedUnderline(hover === 1);
  const emailULAnimProps = useAnimatedUnderline(hover === 2);

  return (
    <animated.div
      {...divAnimProps}
      className="absolute w-full h-full top-0 text-center flex flex-col justify-center items-center px-10 pb-6"
    >
      <p className="text-2xl md:text-4xl 3xl:text-5xl text-neutral-50 w-full md:w-[80%] lg:w-1/2 xl:w-[40%] 2xl:w-1/3">
        Check out my&nbsp;
        <a
          href="https://github.com/maazhassan" 
          className="text-blue-gray hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {if (window.innerWidth > 768) setHover(0)}}
          onMouseOut={() => setHover(null)}
        >
          GitHub
          <animated.span
            {...gitULAnimProps}
            className={`bg-current absolute h-[2px] w-full my-0 bottom-0 left-0`}>  
          </animated.span>
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.linkedin.com/in/maaz-hassan/" 
          className="text-[#0a66c2] hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {if (window.innerWidth > 768) setHover(1)}}
          onMouseOut={() => setHover(null)}
        >
          LinkedIn
          <animated.span
            {...liULAnimProps}
            className={`bg-current absolute h-[2px] w-full my-0 bottom-0 left-0`}>  
          </animated.span>
        </a>.
        <br/><br/>

        Have a question, or just want to chat?&nbsp;
        <a
          href="mailto:contact@maazhassan.net" 
          className="text-blue-gray hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {if (window.innerWidth > 768) setHover(2)}}
          onMouseOut={() => setHover(null)}
        >
          Email me!
          <animated.span
            {...emailULAnimProps}
            className={`bg-current absolute h-[2px] w-full my-0 bottom-0 left-0`}>
          </animated.span>
        </a>
      </p>
    </animated.div>
  );
}

export default About;