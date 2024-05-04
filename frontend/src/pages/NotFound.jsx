import React, { useState, useEffect } from "react";
import { Container, Stack, Box, Paper, Typography, Button, Fade, Divider, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const [show, setShow] = useState(false);

  // Use a single useEffect hook to handle the fade-in effect
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  const navigate = useNavigate();

  // Simplify the handleGotoHomeButton function
  const handleGotoHomeButton = () => navigate("../dashboard", { replace: true });

  return (
    <Fade in={show}>
      <Container maxWidth="md" sx={{ height: "100vh" }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
          <Grid item>
            <Paper elevation={3}>
              <Box p={4}>
                <Stack spacing={3}>
                  <Typography variant="h3" component="h3">
                    404 - Page not found
                  </Typography>
                  <Divider />
                  <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={handleGotoHomeButton}
                  >
                    Go To Home
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}