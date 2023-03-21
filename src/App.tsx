import React from 'react';
import './App.css';
import Card from './Components/MaterialComponents/Card';
import { ThemeProvider } from '@mui/material';
import theme from './Utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme()} >
      
    </ThemeProvider>
  );
}

export default App;
