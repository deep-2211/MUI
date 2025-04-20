import { Button, Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Main() {
  return (
    <Container>
      <h1>Hello</h1>
      <Typography color="secondary" component="h1" noWrap gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta adipisci
        eveniet quis fuga aliquid id omnis libero exercitationem, inventore
        excepturi. Possimus sunt aliquid itaque! Quisquam, explicabo minima.
        Sapiente, alias quae.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<ArrowForwardIosIcon />}
        sx={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Main;
