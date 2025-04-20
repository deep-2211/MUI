import { Container, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

/** Use and apply custom class in recat component */
const useStyles = makeStyles({
  titleStyle: {
    background: "yellow",
    fontSize: 60,
    "&:hover": {
      backgroundColor: "pink",
      fontSize: 80,
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.titleStyle}>Hello</h1>
      <Typography color="secondary" component="h1" noWrap gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta adipisci
        eveniet quis fuga aliquid id omnis libero exercitationem, inventore
        excepturi. Possimus sunt aliquid itaque! Quisquam, explicabo minima.
        Sapiente, alias quae.
      </Typography>
    </Container>
  );
}

export default App;
