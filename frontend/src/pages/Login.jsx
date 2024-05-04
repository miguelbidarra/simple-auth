import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  Fade,
  Divider,
  Box, // Add Box component for centering image
} from "@mui/material";
import userContext from "../UserContext";
import logo from "./../assets/logo.jpg";

const LOGIN_DELAY = 100; // Define a constant for the timeout value

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, LOGIN_DELAY);
  }, []);

  useEffect(() => {
    loadUsers(); // Rename function to loadUsers
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4200/users");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateNewAccount = () => {
    navigate("/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4200/login", {
        username,
        password,
      });
      const token = response.data.token;
      setUsername("");
      setPassword("");
      loadUsers();
      navigate("/dashboard");
      localStorage.setItem("token", token);
    } catch (error) {
      setError(error.message); // Set error state
    }
  };

  return (
    <Fade in={show}>
      <Container
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item>
            <Paper elevation={3}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                p={4}
              >
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid item>
                    <Box display="flex" justifyContent="center">
                      <img
                        src={logo}
                        alt="Login logo"
                        width="100"
                        height="auto"
                      />
                    </Box>
                    <Typography variant="h4" component="div">
                      Welcome Back
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <TextField
                      label="Username"
                      id="outlined"
                      type="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                    {error && ( // Display error message
                      <Typography color="error">{error}</Typography>
                    )}
                    <Button variant="contained" fullWidth onClick={handleLogin}>
                      Login
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleCreateNewAccount}
                    >
                      Create new account
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default Login;
