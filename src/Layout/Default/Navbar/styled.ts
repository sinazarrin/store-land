import MaterialAppBar from "@mui/material/AppBar";
import MaterialToolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";


export const AppBar = styled(MaterialAppBar)(({theme}) => ({
  background: "rgba( 255, 255, 255, 0 )",
  backdropFilter: "blur(18px)",
  borderRadius: 10,
  position: "fixed",
  padding: "0 100px",
  height: 95,
  "& .isax-shopping-cart":{
    color: "#fff"
  }
}));

export const Toolbar = styled(MaterialToolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LogoText = styled("h1")<any>(({theme,color}) => ({
  cursor: "pointer",
  fontSize: "38px",
  fontFamily: "Yekan Bakh",

  // color: theme.palette.mode === "dark" ? "red" : "pink",
  //  [theme.breakpoints.up("sm")]:{
  //   color:"pink",
  //  },
}));