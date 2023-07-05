import React from "react";
import './Header.css';

function PageHeader(){


    return (
    <div id="header">
        <h1>Robert William Lord: Full Stack Web Developer</h1>
        <nav>
          <ul className="navList">
            <li className="navListItem"><a>About Me</a></li>
            <li className="navListItem"><a>My Work</a></li>
            <li className="navListItem"><a>Contact</a></li>
            <li className="navListItem"><a>Resume</a></li>
          </ul>
        </nav>
    </div>
    
    );
}

export default PageHeader