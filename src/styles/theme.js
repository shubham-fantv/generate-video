import { createTheme } from "@mui/material/styles";

// Light theme configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: 'Nohemi, sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: 'Nohemi, sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

export { lightTheme, darkTheme };
