import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material"

type Props  = {
    toogleDarkMode : () => void,
    darkMode : boolean;
}

function Navbar( {toogleDarkMode,darkMode} : Props) {
   

   
    return ( 


        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Kick&Thread</Typography>
                <IconButton onClick={toogleDarkMode}>{darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}} />}</IconButton>
            </Toolbar>
        </AppBar>
     );
}

export default Navbar;