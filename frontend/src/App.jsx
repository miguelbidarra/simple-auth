import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./UserContext";
import theme from "./theme.jsx";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {isUserSignedIn && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
