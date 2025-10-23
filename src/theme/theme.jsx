import { createTheme } from "@mui/material";

// MUI theme setup for baseline style rules
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "transparent",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(2.125rem, 5vw, 3.25rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h3: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h4: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h5: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    body1: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      lineHeight: 1.8,
      color: "#ffffff",
    },
    body2: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      lineHeight: 1.8,
      color: "#CFCFCF",
    },
    button: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: "var(--body-text-size)",
    },
    subtitle1: {
      fontFamily: "'Orbitron', sans-serif",
      letterSpacing: 10,
    },
  },
});

export default theme;
