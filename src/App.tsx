import { ThemeProvider } from "@mui/material";
import theme from "./Utils/theme";
import './Assets/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme()}>
        <Router>
        </Router>
    </ThemeProvider>
  );
}

export default App;
