import { Typography } from "@mui/material";
import MaterialAppBar from "@mui/material/AppBar";
import MaterialToolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

export const AppBar = styled(MaterialAppBar)({
  backgroundColor: "none",
  color: "#00000",
  backdropFilter: "blur(10px)",
  position: "fixed",
  padding: "0 100px",
  height: 75,

  "& .isax-shopping-cart":{
    color: "#fff"
  }
});

export const Toolbar = styled(MaterialToolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LogoText = styled(Typography)({
  cursor: "pointer",
  fontSize: "38px",
});