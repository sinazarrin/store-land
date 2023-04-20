import { IconButton } from "@mui/material";
import * as Styled from './styled'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Styled.AppBar elevation={0} >
      <Styled.Toolbar>
        <Link to='/'>
          <Styled.LogoText>استورلــــند</Styled.LogoText>
        </Link>
        <div>
          <Link to="/cart-page">
            <IconButton size="large">
              <i className="isax isax-shopping-cart"></i>
            </IconButton>
          </Link>
        </div>
      </Styled.Toolbar>
    </Styled.AppBar>
  );
};

export default Navbar;