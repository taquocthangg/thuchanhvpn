import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlineInfoCircle } from "react-icons/ai"
import { NavLink } from "react-router-dom";


const Accordion = ({ title, content, content1, content2, content3 }) => {
  const [isActive, setIsActive] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="accordion-item right3">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="title-item">{title} < AiFillCaretDown /></div>
        <div>{isActive}</div>
      </div>
      {isActive && <div className="accordion-content sub-menu">
        <NavLink
          to="home1"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
          <i className="icon__mobile"> <AiOutlineInfoCircle /></i>{content}
        </NavLink>
        <NavLink
          to="home2"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
          <i className="icon__mobile"> <AiOutlineInfoCircle /></i>{content1}
        </NavLink>
        <NavLink
          to="/"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
          <i className="icon__mobile"> <AiOutlineInfoCircle /></i>{content2}
        </NavLink>
        </div>}
    </div>
  );
};

export default Accordion;