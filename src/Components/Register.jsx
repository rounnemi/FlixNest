import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Register = ({ handleRegisterClick }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
      id: 0,
      email: formData.email,
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
        navigate(`/${data.name}`);
      } else {
        // Handle errors, e.g., show an error message
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error sending the registration request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" items-center justify-center  w-3/4  mt-[15%] md:mt-[0%]  mb-[10%] ml-[10%] backdrop-blur-md h-1/3 p-10 rounded-md md:w-1/3 md:h1/2 md:ml-[30%]">
        <div className="flex flex-col gap-2">
          <div className=" justify-end">
            <button onClick={handleRegisterClick}>
              <FontAwesomeIcon icon={faX} className="text-md" />
            </button>
            {/* Le reste de votre contenu */}
          </div>
          <p className="text-center text-3xl font-bold italic text-white mb-4">
            Register
          </p>
          <input
            type="text" // Change the input type if necessary
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-slate-900 w-full rounded-sm h-1/2 border text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="User Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-slate-900 w-full mt-2  h-1/2 rounded-sm border  text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="bg-slate-900 w-full mt-2  h-1/2 rounded-sm border text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Password"
          />
          <button className="inline-block mt-2 h-1/2 w-3/4 ml-[12.5%] cursor-pointer rounded-sm bg-gray-500 px-4 py-3.5 text-center text-xs font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
