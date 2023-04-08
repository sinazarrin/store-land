import { useEffect } from 'react'
import { ThemeProvider } from "@mui/material";
import theme from "./Utils/theme";
import './Assets/styles/index.css'
import { fetchProducts } from './Api/ProductService';
import ProductPage from './Pages/ProductPage';

function App() {
  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
    })();

  }, [])


  return (
    <ThemeProvider theme={theme()}>
      <ProductPage/>
    </ThemeProvider>
  );
}

export default App;
