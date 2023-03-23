import { ThemeProvider } from "@mui/material";

import theme from "./Utils/theme";
import './Assets/styles/index.css'

function App() {
  return (
    <ThemeProvider theme={theme()}>
    </ThemeProvider>
  );
}

export default App;
