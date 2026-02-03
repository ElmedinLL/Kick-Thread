
import {  decrement, increment, } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">The Data is {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment(1))} color="primary">
          Increment
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(decrement(1))}
          color="error">
          Decrement
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(increment(5))}
          color="success">
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
