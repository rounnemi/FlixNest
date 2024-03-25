import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Login = ({ handleRegisterClick , handleLoginClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object in the desired format
    const data = {
      password: formData.password,
      name: formData.email, // You can set this to a default or leave it as is
    };

    // Send a POST request to the API using Axios
    try {
      const response = await axios.post(
        "https://localhost:7186/api/Customer",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle a successful response, e.g., show a success message or redirect
        console.log("Registration successful");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error sending the registration request:", error);
    }
  };

  return (
    <div className=" items-center justify-center mt-[15%] md:mt-[0%] w-3/4 ml-[10%] backdrop-blur-md h-1/2 p-10 rounded-md md:w-1/3 md:h1/2 md:ml-[30%]">
      <div className="flex flex-col  ">
        <div className=" justify-end">
          <button onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faX} className="text-md" />
          </button>
          {/* Le reste de votre contenu */}
        </div>
        <p className="text-center md:text-3xl text-lg text-white font-bold italic  mb-4">
          Login
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text" // Change the input type if necessary
            name="Name"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-slate-900 w-full h-1/2 rounded-sm border text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 m-1"
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="m-1 bg-slate-900 w-full h-1/2 rounded-sm border text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Password"
          />
          <button className="m-1 w-3/4 ml-[12.5%]  h-1/4 inline-block cursor-pointer rounded-xs bg-gray-500 px-4 py-3.5 text-center text-xs font-semibold uppercase text-white  ">
            Login
          </button>
        </form>
        <button
          className="text-white font-bold"
          onClick={(e) => {
            e.preventDefault(); // Empêche la soumission du formulaire
            handleRegisterClick();
          }}
        >
          Not Regitred Yet !!
        </button>
      </div>
    </div>
  );
};

export default Login;
