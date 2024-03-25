import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faEye } from "@fortawesome/free-solid-svg-icons";

const ToggleMenue = ({ handleLoginClick, HandleClickShowSearchBar }) => {
  const handleSearchClick = () => {
    // Logique de la fonction handleSearchClick
  };

  const Explore = () => {
    // Logique de la fonction Explore
  };

  const handleButtonClick = (action) => {
    action();
  };

  const choice = [
    { name: "Login", action: handleLoginClick, icon: faUser },
    { name: "Search", action: HandleClickShowSearchBar, icon: faSearch },
    { name: "Explore", action: Explore, icon: faEye },
  ];

  return (
    <div className="flex flex-col md:flex-row right-0 p-10  top-0 fixed backdrop-blur-sm md:backdrop-blur-none md:static ">
      <ul className="md:flex md:items-center ">
        {choice.map(({ name, action, icon }) => (
          <li
            key={name}
            className="md:inline-block md:mx-2 py-2 border-transparent hover:border-white duration-300"
          >
            <button
              className="text-white text-sm md:text-lg inline-block font-normal p-2 md:p-5"
              onClick={() => handleButtonClick(action)}
            >
              <FontAwesomeIcon icon={icon} />
              <span className="font-bold ml-1 md:ml-2">{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleMenue;
