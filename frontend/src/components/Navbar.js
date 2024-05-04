import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from "@mui/material";
import logo from "./../assets/logo.jpg";

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="error">
      <Toolbar>
        <Box display="flex" justifyContent="center">
          <img src={logo} alt="Login logo" width="50" height="auto" />
        </Box>
        <Tabs value={isUserSignedIn ? 0 : 1}>
          {isUserSignedIn ? (
            <>
              <Tab label="Dashboard" component={Link} to="/dashboard" />
              <Tab label="Sign Out" onClick={handleSignOut} />
            </>
          ) : (
            <>
              <Tab label="Login" component={Link} to="/login" />
              <Tab label="Signup" component={Link} to="/signup" />
            </>
          )}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
