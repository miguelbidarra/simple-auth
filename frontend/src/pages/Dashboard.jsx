import React, { useEffect } from "react";
import { Typography, Container, Card } from "@mui/material";
import axios from "axios";

const fetchProfile = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get("http://localhost:4200/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log(response.data); protect this route
    } catch (error) {
      console.error(error.message);
    }
  }
};

const Dashboard = () => {
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card
        md={6}
        lg={4}
        sx={{
          maxWidth: "lg", // set max width to lg
          textAlign: "center", // center the text
          py: 4, // add some padding
          elevation: "3",
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
      </Card>
    </Container>
  );
};

export default Dashboard;
