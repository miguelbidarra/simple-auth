import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container py={3}>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
