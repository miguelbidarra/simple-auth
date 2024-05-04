import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import Navbar from "../home/Navbar";

const Profile = () => {
  const [userName] = useState("Name");
  const [userEmail] = useState("Email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={6} sx={{ maxWidth: "md" }}>
          <Card sx={{ mt: 4, mb: 4 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h4">{userName}</Typography>
              <Typography variant="h4">{userEmail}</Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;