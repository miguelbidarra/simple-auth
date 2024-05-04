import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from "@mui/material";
import logo from "./../assets/logo.jpg";

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#222428" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            icon={
              <img
                src={logo}
                alt="Logo"
                style={{ width: "25px", height: "auto" }}
              />
            }
            value="1"
          />
          <Tab label="Dashboard" onClick={handleGoToDashboard} value="1" />
          <Tab label="Profile" value="2" />
          <Tab label="Sign Out" onClick={handleSignOut} value="3" />
        </Tabs>
      </AppBar>
    </>
  );
}

export default Navbar;
