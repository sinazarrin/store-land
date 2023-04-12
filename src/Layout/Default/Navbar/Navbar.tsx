import {useEffect,useState} from 'react'
import { IconButton } from "@mui/material";
import * as Styled from './styled'

const Navbar = () => {
  const [changeColor, setChangeColor] = useState("white")
  
  return (
    <Styled.AppBar elevation={0} >
      <Styled.Toolbar>
        <Styled.LogoText xs={{color: "red"}}>استورلــــند</Styled.LogoText>
        <div>
          <IconButton size="large">
            <i className="isax isax-shopping-cart"></i>
          </IconButton>
        </div>
      </Styled.Toolbar>
    </Styled.AppBar>
    
    
  );
};

export default Navbar;
