import React from "react";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import userIocn from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import {motion } from'framer-motion'

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className='="header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" srcset="" />
              <h1>Multimart</h1>
              <p>Since 1995</p>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item, index ) => (
                  <li className="nav_item"  key={index}>
                  
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                {" "}
                <motion.img  whileTap={{scale: 1.2}} src={userIocn} alt="" />{" "}
              </span>
            </div>
            <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
