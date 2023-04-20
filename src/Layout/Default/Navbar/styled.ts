import MaterialAppBar from "@mui/material/AppBar";
import MaterialToolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";


export const AppBar = styled(MaterialAppBar)(({theme}) => ({
  background: 'rgba( 0, 0, 0, 0.1 )',
  backdropFilter: "blur(10px)",
  position: "fixed",
  padding: "0 100px",
  height: 95,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  "& .isax-shopping-cart":{
    color: "#fff"
  }
}));

export const Toolbar = styled(MaterialToolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&>a>h1":{
    color: "#fff"
  }
});

export const LogoText = styled("h1")<any>(({theme,color}) => ({
  cursor: "pointer",
  fontSize: "38px",
  fontFamily: "Yekan Bakh",
  textShadow: '0 2px 4px rgba(71,97,206,.36)',
  // color: theme.palette.mode === "dark" ? "red" : "pink",
  //  [theme.breakpoints.up("sm")]:{
  //   color:"pink",
  //  },
}));