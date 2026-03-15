import {  Link, SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";


export default function NotFound() {
  return (
    <Paper sx={{height : 400 , display : 'flex' , flexDirection : 'column' 
    , justifyContent : 'center', alignItems : 'ceneter', padding : 6}}>
      <SearchOff sx={{fontSize : 100 , color : 'primary'}}/>
      <Typography variant="h3" color='error' gutterBottom>
        Oops - we couldn't find what you were looking for
      </Typography>
      <Button fullWidth component={Link} to={'/catalog'}>
        Go back to shop
      </Button>
    </Paper>
  )
}
    