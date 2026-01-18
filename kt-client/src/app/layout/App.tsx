import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";

  function toogleDarkMode() {
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toogleDarkMode={toogleDarkMode} />
      <Box
        sx={{
          py: 6,
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle at top, #0b1a2a 0%, #102c45 50%, #1c3f5a 100%)"
            : "linear-gradient(135deg, #80929f 0%, #F0F7FF 100%)",
        }}>
        <Container maxWidth="xl" sx={{ marginTop: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
