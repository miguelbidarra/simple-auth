import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#545aea" },
    white: { main: "#000000" },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#fff", // or any other color you want
          "&.Mui-selected": {
            fontWeight: 700, // set font weight to bold when selected
          },
          textTransform: "none", // add this line to set text transform to none
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        },
      },
    },
  },
});

export default theme;
