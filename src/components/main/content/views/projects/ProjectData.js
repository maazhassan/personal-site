import PersonalSite from "../../../../../images/PersonalSite.png";
import Library from "../../../../../images/Library.jpg";
import BetterD2L from "../../../../../images/BetterD2L.png";
import Sudoku from "../../../../../images/Sudoku.png";
import Chess from "../../../../../images/Chess.png";
import Crypto from "../../../../../images/Crypto.png";
const webColor = "text-blue";
const otherColor = "text-green";

export const web = {
  description: (
    <span>
      <span className={webColor}>Web applications</span> that I've created or have been a part of.<br />
    </span>
  ),
  color: webColor,
  projects: [
    {
      title: "Personal Site",
      stack: "React, Tailwind CSS",
      image: PersonalSite,
      description: (
        <span>
          The site you're on right now. I made it completely from 
          <span className={webColor}> scratch</span> and it serves as my 
          <span className={webColor}> portfolio</span>.
        </span>
      ),
      github: "https://github.com/maazhassan/personal-site"
    },
    {
      title: "LibManSys",
      stack: "React, Express.js, MySQL",
      image: Library,
      description: (
        <span>
          A library management application made in a group of 3 for a databases class. I worked on the
          <span className={webColor}> API</span> and
          <span className={webColor}> database</span>.
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
          <span className={webColor}> API</span> and
          <span className={webColor}> database</span>.
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
          <span className={webColor}> solving algorithm</span> using
          <span className={webColor}> backtracking</span>.
        </span>
      ),
      github: "https://github.com/maazhassan/React-Sudoku-and-Solver"
    }
  ]
};

export const other = {
  description: (
    <span>
      <span className={otherColor}>Non-web projects</span> that I've created or have been a part of.<br />
    </span>
  ),
  color: otherColor,
  projects: [
    {
      title: "Chess",
      stack: "Java, JavaFX",
      image: Chess,
      description: (
        <span>
          A chess game with an AI made in a group of 4 for a Java class. It is an exact clone of the board game. I worked on the
          <span className={otherColor}> game logic</span> and
          <span className={otherColor}> AI</span>.
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
          <span className={otherColor}> data science</span> techniques, and it leverages various
          <span className={otherColor}> APIs</span> for data.
        </span>
      ),
      github: "https://github.com/maazhassan/Crypto-Charts"
    },
  ]
};