import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './Utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme()} >
      
    </ThemeProvider>
  );
}

export default App;
