import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <form class="flex items-center w-3/4 mt-[5%] ml-[10%] backdrop-blur-md">
      <input
        type="text"
        name="SearchKey"
        className="m-1 bg-slate-900 mt-[3%] w-full h-1/2 rounded-sm border text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
        placeholder="Name , Title ..."
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
export default SearchBar;
