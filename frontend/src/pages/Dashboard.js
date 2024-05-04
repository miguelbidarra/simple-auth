import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Navbar from "./../components/Navbar";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:4200/users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data);
          setUsername(token.data);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <Typography>Dashboard</Typography>
    </div>
  );
};

export default Profile;
