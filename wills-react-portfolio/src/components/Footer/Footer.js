import React from "react";

import "./Footer.css";

function Pagefooter() {
  return (
    <div id="bottom">
      <footer>
        <ul>
          <li>
            <a href="https://github.com/Masterchef842">
              <img
                className="socialImg"
                src="https://pngimg.com/uploads/github/github_PNG40.png"
                alt="github logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/robert-lord-804402212/">
              <img
                className="socialImg"
                src="https://cdn1.iconfinder.com/data/icons/simple-icons/2048/linkedin-2048-black.png"
                alt="linkedIn logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/2UZi3SlNAD7CSPzsJkoWDd?si=IvEfrSsfT76cMI3e7SLVxQ">
              <img
                className="socialImg"
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png"
                alt="spotify logo"
              ></img>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Pagefooter;
