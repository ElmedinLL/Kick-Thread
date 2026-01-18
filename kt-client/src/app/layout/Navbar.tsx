import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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
    color: "#212323",
  },
};

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

type Props = {
  toogleDarkMode: () => void;
  darkMode: boolean;
};

function Navbar({ toogleDarkMode, darkMode }: Props) {
  return (
    <AppBar sx={{ backgroundColor: "#1c4f69" }} position="fixed">
      <Toolbar sx={{ flex: "row", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={navStyles} component={NavLink} to="/" variant="h6">
            KICK&THREAD
          </Typography>
          <IconButton onClick={toogleDarkMode}>
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
    </AppBar>
  );
}

export default Navbar;
