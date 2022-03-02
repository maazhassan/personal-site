import PersonalSite from '../../../../../images/PersonalSite.png';
import Library from '../../../../../images/Library.png';
import BetterD2L from '../../../../../images/BetterD2L.png';
import Sudoku from '../../../../../images/Sudoku.png';

export const web = {
  description: (
    <span>
      <span className="text-blue">Web applications</span> that I've created or have been a part of.<br />
    </span>
  ),
  color: "text-blue",
  projects: [
    {
      title: "Personal Site",
      stack: "React, Tailwind CSS",
      image: PersonalSite,
      description: (
        <span>
          The site you're on right now. I made it completely from 
          <span className="text-blue"> scratch</span> and it serves as my 
          <span className="text-blue"> portfolio</span>.
        </span>
      ),
      github: "https://github.com/maazhassan"
    },
    {
      title: "Library Management System",
      stack: "React, Express.js, MySQL",
      image: Library,
      description: "Lorem ipsum 1",
      github: "https://github.com/maazhassan/Library-Management-System"
    },
    {
      title: "Better D2L",
      stack: "Vue, Flask, SQLite",
      image: BetterD2L,
      description: "Lorem ipsum 2",
      github: "https://github.com/maazhassan/Better-D2L"
    },
    {
      title: "Sudoku Solver",
      stack: "React, Flask, SQLite",
      image: Sudoku,
      description: "Lorem ipsum 3",
      github: "https://github.com/maazhassan/React-Sudoku-and-Solver"
    }
  ]
};

export const other = {
  description: (
    <span>
      <span className="text-green">Non-web projects</span> that I've created or have been a part of.<br />
    </span>
  ),
  color: "text-green",
  projects: [
    {
      title: "Personal Site",
      stack: "React, Tailwind CSS",
      image: PersonalSite,
      description: "Lorem ipsum",
      github: "https://github.com/maazhassan"
    },
    {
      title: "Personal Site",
      stack: "React, Tailwind CSS",
      image: PersonalSite,
      description: "Lorem ipsum 1",
      github: "https://github.com/maazhassan"
    },
  ]
};