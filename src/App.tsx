import React from "react";
import "./App.css";
import { IconButton, ThemeProvider } from "@mui/material";
import theme from "./Utils/theme";
import Navbar from "./Layout/Default/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <Navbar></Navbar>
    </ThemeProvider>
  );
}

export default App;
