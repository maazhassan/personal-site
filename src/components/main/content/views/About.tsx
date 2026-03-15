import { useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import useAnimatedFade from "../../../../hooks/animatedFade";
import useAnimatedUnderline from "../../../../hooks/animatedUnderline";

interface AboutProps {
  toggle: boolean;
}

const About = ({ toggle }: AboutProps) => {
  const [mountToggle, setMountToggle] = useState(false);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    setMountToggle(true);
  }, []);

  const divAnimProps = useAnimatedFade(toggle && mountToggle);
  const uniULAnimProps = useAnimatedUnderline(hover === 0);
  const resULAnimProps = useAnimatedUnderline(hover === 1);
  const synULAnimProps = useAnimatedUnderline(hover === 2);

  return (
    <animated.div
      {...divAnimProps}
      className="absolute w-full h-full top-0 text-center flex flex-col justify-center items-center px-10 pb-6"
    >
      <p className="text-xl md:text-2xl 3xl:text-3xl text-neutral-50 w-full md:w-[80%] lg:w-1/2 xl:w-[40%] 2xl:w-2/5">
        <span>A software developer graduate from the </span>
        <a
          href="https://www.ucalgary.ca/"
          className="text-[#ffcd00] hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {
            if (window.innerWidth > 768) setHover(0);
          }}
          onMouseOut={() => setHover(null)}
        >
          University of Calgary
          <animated.span
            {...uniULAnimProps}
            className="bg-current absolute h-[2px] w-full my-0 bottom-0 left-0"
          />
        </a>
        .
        <br />
        <br />
        <span>
          Currently building the next generation of well information management
          software at{" "}
        </span>
        <a
          href="https://resourceenergysolutions.com/"
          className="text-red-600 hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {
            if (window.innerWidth > 768) setHover(1);
          }}
          onMouseOut={() => setHover(null)}
        >
          Resource Energy Solutions
          <animated.span
            {...resULAnimProps}
            className="bg-current absolute h-[2px] w-full my-0 bottom-0 left-0"
          />
        </a>
        .
        <br />
        <br />
        <span>
          Outside of work, I enjoy experimenting with new technologies, running
          a small homelab, and building tools to solve everyday problems.
        </span>
        <br />
        <br />
        {/* <span>Former intern at </span>
        <a
          href="https://www.synopsys.com/"
          className="text-[#5a2a82] hover:cursor-pointer relative"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => { if (window.innerWidth > 768) setHover(2); }}
          onMouseOut={() => setHover(null)}
        >
          Synopsys
          <animated.span
            {...synULAnimProps}
            className="bg-current absolute h-[2px] w-full my-0 bottom-0 left-0"
          />
        </a>.
        <br /><br /> */}
        <span>Click a switch below to see some of my work!</span>
      </p>
    </animated.div>
  );
};

export default About;
