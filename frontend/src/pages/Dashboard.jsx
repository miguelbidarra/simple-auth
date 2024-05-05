import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

const Profile = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:4200/api/users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          //console.log(response.data); protect this route
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <Typography variant="h1">Dashboard</Typography>
    </>
  );
};

export default Profile;
