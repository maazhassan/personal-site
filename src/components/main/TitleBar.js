import { BsEnvelopeFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const TitleBar = () => {
  return (
    <div className="overflow-hidden">
      <div className="mt-2 md:mt-4 text-center">
        <span className="text-neutral-50 text-4xl md:text-5xl 3xl:text-6xl">
          MAAZ HASSAN
        </span>
      </div>
      <div className="flex flex-row justify-center gap-x-8 mt-1 md:mt-3">
        <a href="mailto:contact@maazhassan.net">
          <BsEnvelopeFill className="text-neutral-50 hover:text-text-blue cursor-pointer" size="30px" />
        </a>
        <a href="https://github.com/maazhassan" target="_blank" rel="noreferrer">
          <BsGithub className="text-neutral-50 hover:text-text-blue cursor-pointer" size="30px" />
        </a>
        <a href="https://www.linkedin.com/in/maaz-hassan/" target="_blank" rel="noreferrer">
          <BsLinkedin className="text-neutral-50 hover:text-text-blue cursor-pointer" size="30px" />
        </a>
      </div>
    </div>
  );
}

export default TitleBar;