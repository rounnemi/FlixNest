import React, { useState, useEffect } from "react";
import ToggleMenu from "./ToggledMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
import Register from "./Register";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useParams } from "react-router-dom";

const WIDTH_THREASHOLD = 720;
const Header = () => {
  const [showMenu, setShowMenu] = useState(
    window.innerWidth > WIDTH_THREASHOLD
  );
  const [showName, setShowName] = useState(
    window.innerWidth < WIDTH_THREASHOLD
  );
  const [showRegister, setshowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth <= WIDTH_THREASHOLD
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= WIDTH_THREASHOLD);
      if (window.innerWidth > WIDTH_THREASHOLD) setShowMenu(true);
      else setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (window.innerWidth < WIDTH_THREASHOLD) {
      setShowLogin(false);
      setshowRegister(false);
      setShowName(showMenu);
      setShowSearchBar(false);
    }
  };
  const HandleClickShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setShowLogin(false);
    setshowRegister(false);
    if (window.innerWidth < WIDTH_THREASHOLD) {
      setShowMenu(false);
    }
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setshowRegister(false);
    setShowSearchBar(false);
    if (window.innerWidth < WIDTH_THREASHOLD && !showLogin) setShowName(true);
    if (window.innerWidth < WIDTH_THREASHOLD) setShowMenu(false);
  };

  const handleRegisterClick = () => {
    setshowRegister(!showRegister);
    setShowLogin(false);
    setShowSearchBar(false);

    if (window.innerWidth < WIDTH_THREASHOLD) setShowMenu(false);
  };

  return (
    <div className="fixed top-[5%] md:top-[1%] w-full ml-[3%] z-50">
      <nav className="flex items-center justify-between ">
        <div className="flex  ">
          <button onClick={toggleMenu} className="ml-7 md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <div>
            <a
              className="text-xl font-bold italic text-center p-2 md:px-4 md:ml-4 cursor-pointer md:text-4xl "
              href="#"
            >
              MovieNight
            </a>
          </div>
        </div>
        <div className=" md:flex md:mr-[3%] ">
          {showMenu && (
            <ToggleMenu
              handleLoginClick={handleLoginClick}
              HandleClickShowSearchBar={HandleClickShowSearchBar}
            />
          )}
        </div>
      </nav>
      {showRegister && <Register handleRegisterClick={handleRegisterClick} />}
      {showLogin && (
        <Login
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
        />
      )}
      {showSearchBar && <SearchBar />}
    </div>
  );
};

export default Header;
