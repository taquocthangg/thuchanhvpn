/*
========================= Trang Chủ =========================
=                           Author                          =
=                         Quốc Thắng                        =
=============================================================
*/
import React, { useState } from 'react';
import './Header.css'
import '../../css/main.css'
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { HiOutlineBookOpen } from "react-icons/hi"
import { HiOutlineNewspaper } from "react-icons/hi"
import { BsPatchQuestion } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import Accordion from '../Accordion';
import { accordionData } from '../../data';
const Header = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, Setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 30) {
      Setcolor(true)
    }
    else {
      Setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  const { pathname } = useLocation();
  if (pathname === "/login") return null;
  return (
    <>
      <div className={color ? 'navbar navbar_bg ' : 'navbar'}>
        <div className="container">
          <div className="nav-container">
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="" />
            </NavLink>
            <div className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav__bot">
                <ul>
                  <li className="nav-item">

                    <NavLink

                      activeClassName="active"
                      className="nav-links"                    >
                      <i className='icon__mobile'> <AiFillHome /> </i>  <ul >
                      {accordionData.map(({ title, content, content1, content2 }) => (
                        <Accordion title={title} content={content} content1={content1} content2={content2}/>
                      ))}
                    </ul>
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      to="about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <i className="icon__mobile"> <AiOutlineInfoCircle /></i> About Us
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink

                      to="services"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <i className="icon__mobile"> <FiSettings /> </i>  Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink

                      to="faq"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <i className="icon__mobile"><HiOutlineBookOpen /></i> FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink

                      to="pricing"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <i className="icon__mobile"><HiOutlineNewspaper /></i>  Pricing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink

                      to="contact"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <i className="icon__mobile"><BsPatchQuestion /></i>  Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink

                      to="login"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <div className="login">Login</div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header