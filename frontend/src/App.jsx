import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./home/Home.jsx";
import Profile from "./pages/Profile";
import { UserProvider } from "./UserContext";
import theme from "./theme.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Dashboard from "./pages/Dashboard";
import Navbar from "./home/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
