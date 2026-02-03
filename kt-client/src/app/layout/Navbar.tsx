import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "rgba(236, 235, 235, 0.49)",
  },
  "&.active": {
    color: "#758181",
  },
};

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];



function Navbar() {

  const {isLoading , darkMode} = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  return (
    <AppBar sx={{ backgroundColor: "#333636" }} position="fixed">
      <Toolbar sx={{ flex: "row", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={navStyles} component={NavLink} to="/" variant="h6">
            KICK&THREAD
          </Typography>
          <IconButton onClick={() => dispatch(setDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          {midLinks.map(({ title, path }) => (
            <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large">
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex", flexDirection: "row" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{width:'100%'}}>
          <LinearProgress color="primary"/>
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
