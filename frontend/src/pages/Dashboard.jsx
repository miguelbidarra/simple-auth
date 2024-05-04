import React, {useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Navbar from "../components/Navbar";

const Profile = () => {


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:4200/users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />
      <Typography variant="h1">Dashboard</Typography>
    </>
  );
};

export default Profile;
