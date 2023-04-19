import { useEffect } from 'react'
import { ThemeProvider } from "@mui/material";
import theme from "./Utils/theme";
import './Assets/styles/index.css'
import { fetchProducts } from './Api/ProductService';
import Navbar from './Layout/Default/Navbar/Navbar';
import Footer from './Layout/Default/Footer';
import CartPage from './Pages/CartPage';

function App() {
  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
    })();

  }, [])


  return (
    <ThemeProvider theme={theme()}>
      <Navbar/>
      <CartPage/>
      {/* <Footer/> */}
    </ThemeProvider>
  );
}

export default App;
