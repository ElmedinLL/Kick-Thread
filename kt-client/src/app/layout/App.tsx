import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {  Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";


function App() {


  const [products , setProducts] = useState<Product[]>([]);
  useEffect(()=>{

      fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])
  
 
  
  const [darkMode , setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'


  function toogleDarkMode () {

    setDarkMode(!darkMode);

  }


  const theme = createTheme({
    palette :{
      mode:palleteType,
      background :{
        default : (palleteType === 'light') ? '#eaeaea': "#121212"
      }
    }
  });




return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <Navbar darkMode={darkMode} toogleDarkMode={toogleDarkMode}/>
  <Box sx={{py:6,minHeight:'100vh',background : darkMode  ? "radial-gradient(circle at top, #0b1a2a 0%, #102c45 50%, #1c3f5a 100%)" :  ' background: radial-gradient(circle at top left, #f5f7fa 0%, #e4e9f0 100%)' }}>
    <Container maxWidth='xl' sx={{marginTop:8}}>
    <Catalog products={products}/>
   </Container>
   </Box>
   
 </ThemeProvider>
  )
}

export default App
