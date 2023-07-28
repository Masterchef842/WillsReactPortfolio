import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Header.css';

function PageHeader(){


    return (
    <div id="header">
        <h1>Robert William Lord: Full Stack Web Developer</h1>
        <nav>
          <ul className="navList">
            <CustomLink to="/">About Me</CustomLink>
            <CustomLink to="/showcase">My Work</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
          </ul>
        </nav>
    </div>
    
    );
}
function CustomLink({to, children, ...props}){

  const resolvedPath= useResolvedPath(to)
  const isActive= useMatch({path: resolvedPath.pathname})

  return (
    <li className="navListItem text-light">
      <Link to={to} className={isActive? " active text-light fs-4":"text-light fs-4"}>
        {children}
      </Link>
    </li>
  )
}

export default PageHeader