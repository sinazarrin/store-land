import { IconButton } from "@mui/material";
import * as Styled from './styled'


const GlassmorphismNavbar = () => {
  return (
    <Styled.AppBar position="fixed" elevation={0}>
      <Styled.Toolbar>
        <Styled.LogoText variant="h1">استورلــــند</Styled.LogoText>
        <div>
          <IconButton size="large">
            <i className="isax isax-shopping-cart"></i>
          </IconButton>
        </div>
      </Styled.Toolbar>
    </Styled.AppBar>
  );
};

export default GlassmorphismNavbar;
