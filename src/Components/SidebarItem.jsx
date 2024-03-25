import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItem = ({ name, icon }) => {
  return (
    <div className="text-black text-lg  font-bold">
      <a
        href="#"
        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
      >
        <FontAwesomeIcon icon={icon} />
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
      </a>
    </div>
  );
};

export default SidebarItem;
