import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";
import logo from "./../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };
  const handleGoToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#222428", height: "56px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{ height: "100vh" }}
        >
          <Tab
            onClick={handleGoToDashboard}
            icon={
              <img
                src={logo}
                alt="Logo"
                style={{ width: "25px", height: "auto" }}
              />
            }
            value="1"
            sx={{ width: "100px" }} // Setting width to 100px
          />
          <Tab label="Dashboard" onClick={handleGoToDashboard} value="1" />
          <Tab label="Profile" onClick={handleGoToProfile} value="2" />
        </Tabs>
      </AppBar>
    </>
  );
}

export default Navbar;
