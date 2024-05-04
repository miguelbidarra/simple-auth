import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {UserProvider} from "./UserContext";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <UserProvider>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {isUserSignedIn && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
