import { Alert, AlertTitle, Button, ButtonGroup, Container, List, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery } from "./errorApi";
import { useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";
import { useState } from "react";



export default function AboutPage() {

  const [validationErrors, setValidationErrors] = useState<string[]>([]);

const [trigger400Error] = useLazyGet400ErrorQuery();
const [trigger401Error] = useLazyGet401ErrorQuery();
const [trigger404Error] = useLazyGet404ErrorQuery();
const [trigger500Error] = useLazyGet500ErrorQuery();
const [triggerValidationError] = useLazyGetValidationErrorQuery(); 

const getValidationError = async () => {
  try {
    await triggerValidationError().unwrap();
  } catch (error : unknown ) {
    if(error && typeof error === 'object' && 'message' in error && typeof(error as {message: string}).message === 'string') {
      const errorArray = (error as {message: string}).message.split(', ');
      setValidationErrors(errorArray);
    } 
  }
}

  return (

    <Container maxWidth="lg">
      <Typography gutterBottom variant="h3">Errors for testing</Typography>
      <ButtonGroup sx={{gap:2}}>
        <Button variant="contained" color="error" onClick={() => trigger400Error().catch(error => console.log(error))}> Test 400 Error</Button>
        <Button variant="contained" color="error" onClick={() => trigger401Error().catch(error => console.log(error))}> Test 401 Error</Button>
        <Button variant="contained" color="error" onClick={() => trigger404Error().catch(error => console.log(error))}> Test 404 Error</Button>
        <Button variant="contained" color="error" onClick={() => trigger500Error().catch(error => console.log(error))}> Test 500 Error</Button>
        <Button variant="contained" color="error" onClick={getValidationError}> Test Validation Error</Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error" sx={{mt:2}}>
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map(err => <li key={err}>{err}</li>)}
          </List>
        </Alert>
      )}
    </Container>
  )
}
