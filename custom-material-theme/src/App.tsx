import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./components/Main";
import { pink, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: {
      main: grey[600],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
