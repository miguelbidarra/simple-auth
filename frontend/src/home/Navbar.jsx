import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Tab,
  Tabs,
  useMediaQuery
} from "@mui/material";
import logo from "./../assets/logo.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
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
      {isBelowMd ? (
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "25px", height: "auto" }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
          </Toolbar>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            style={{ width: "100%" }}
          >
            <BottomNavigationAction
              label="Dashboard"
              icon={<DashboardIcon />}
              onClick={handleGoToDashboard}
              value="dashboard"
            />
            <BottomNavigationAction
              label="Profile"
              icon={<AccountCircleIcon />}
              onClick={handleGoToProfile}
              value="profile"
            />
          </BottomNavigation>
        </AppBar>
      ) : (
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
      )}
    </>
  );
}

export default Navbar;
