import { IconButton } from "@mui/material";
import MaterialToolbar from "@mui/material/Toolbar";
import * as Styled from './styled'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Styled.AppBar elevation={0} >
      <MaterialToolbar>
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
      </MaterialToolbar>
    </Styled.AppBar>
  );
};

export default Navbar;