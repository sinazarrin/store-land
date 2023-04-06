import { ThemeProvider } from "@mui/material";

import theme from "./Utils/theme";
import './Assets/styles/index.css'
import Navbar from "./Layout/Default/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
