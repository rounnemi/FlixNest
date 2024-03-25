import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
const Profil = () => {
  const [customer, setCustomer] = useState(null);
  const { customerName } = useParams();

  // Function to retrieve the customer data
  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7186/api/Customer?name=${customerName}`
      );

      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  // Use the useEffect hook to fetch customer data when the component mounts
  useEffect(() => {
    if (customerName) {
      fetchCustomerData();
    }
  }, [customerName]);

  return (
    <div className="h-screen w-full">
      <Sidebar />
    </div>
  );
};

export default Profil;
