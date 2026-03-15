import {  Paper , Typography , Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {

    const {state} = useLocation();

  return (
      <Paper>
    {state.error?(
       <>
        <Typography gutterBottom variant="h5" color='error'>
            {state.error.title}
        </Typography>
        <Divider/>
        <Typography>
            {state.error.detail}
        </Typography>

    </>):(
        <Typography gutterBottom variant="h5" color='error'>
            An error occurred while processing your request.
        </Typography>
    )}
   </Paper>
  );
}
