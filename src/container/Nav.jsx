import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <ul className="menu-list">
        <li>
          <a href="#">홈</a>
        </li>
        <li>
          <a href="https://www.netflix.com/browse/genre/83">TV프로그램</a>
        </li>
        <li>
          <a href="https://www.netflix.com/browse/genre/34399">영화</a>
        </li>
        <li>
          <a href="https://www.netflix.com/latest">NEW!요즘 대세 콘텐츠</a>
        </li>
        <li>
          <a href="https://www.netflix.com/browse/my-list">내가 찜한 콘텐츠</a>
        </li>
      </ul>
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}
export default Nav;
