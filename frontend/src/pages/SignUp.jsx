import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Stack,
  Paper,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  TextField,
  Fade,
  FormHelperText,
  Box,
} from "@mui/material";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:4200/users").then((res) => {
      // console.log(res.data)
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4200/register", { email, username, password })
      .then(() => {
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  const handleGoBackClick = () => {
    navigate("/login", { replace: true });
  };

  return (
    <Fade in={true}>
      <Container
        maxWidth="md"
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
                item
                spacing={3}
                justifyContent="center"
                alignItems="center"
                p={4}
              >
                <Box item xs={12}>
                  <Typography variant="h5">Sign Up</Typography>
                </Box>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <TextField
                      label="Email"
                      id="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: 1 }}
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ArrowBackIosNewIcon />}
                      sx={{ width: 1 }}
                      onClick={handleGoBackClick}
                    >
                      Go Back
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

export default SignUp;
