import {
  Box,

  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";




function App() {

  const {darkMode} = useAppSelector(state => state.ui)
  const palleteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#f8fafc" : "#0f172a",
        paper: palleteType === "light" ? "#ffffff" : "#1e293b",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          py: 6,
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
            : "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        }}>
        <Container maxWidth="xl" sx={{ marginTop: 8 }}>
          <Outlet />
        </Container>
      </Box>
   
    </ThemeProvider>
  );
}

export default App;
