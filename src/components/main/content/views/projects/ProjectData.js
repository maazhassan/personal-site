import PersonalSite from '../../../../../images/PersonalSite.png';
import Library from '../../../../../images/Library.png';
import BetterD2L from '../../../../../images/BetterD2L.png';
import Sudoku from '../../../../../images/Sudoku.png';
import Chess from '../../../../../images/Chess.png';
import Crypto from '../../../../../images/Crypto.png';

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
      title: "LibManSys",
      stack: "React, Express.js, MySQL",
      image: Library,
      description: (
        <span>
          A library management application made in a group of 3 for a databases class. I worked on the
          <span className="text-blue"> API</span> and
          <span className="text-blue"> database</span>.
        </span>
      ),
      github: "https://github.com/maazhassan/Library-Management-System"
    },
    {
      title: "Better D2L",
      stack: "Vue, Flask, SQLite",
      image: BetterD2L,
      description: (
        <span>
          A student dashboard application made in a group of 5 for Calgary Hacks 2021. I worked on the
          <span className="text-blue"> API</span> and
          <span className="text-blue"> database</span>.
        </span>
      ),
      github: "https://github.com/maazhassan/Better-D2L"
    },
    {
      title: "Sudoku Solver",
      stack: "React, Flask, SQLite",
      image: Sudoku,
      description: (
        <span>
          A sudoku game that I made to learn full-stack development. I also wrote a custom
          <span className="text-blue"> solving algorithm</span> using
          <span className="text-blue"> backtracking</span>.
        </span>
      ),
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
      title: "Chess",
      stack: "Java, JavaFX",
      image: Chess,
      description: (
        <span>
          A chess game with an AI made in a group of 4 for a Java class. It is an exact clone of the board game. I worked on the
          <span className="text-green"> game logic</span> and
          <span className="text-green"> AI</span>.
        </span>
      ),
      github: "https://github.com/maazhassan/ChessProject-05-24"
    },
    {
      title: "Crypto Charts",
      stack: "Python",
      image: Crypto,
      description: (
        <span>
          An application to view cryptocurrency price charts. I made it to learn about
          <span className="text-green"> data science</span> techniques, and it leverages various
          <span className="text-green"> APIs</span> for data.
        </span>
      ),
      github: "https://github.com/maazhassan/Crypto-Charts"
    },
  ]
};