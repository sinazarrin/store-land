import MaterialAppBar from "@mui/material/AppBar";
import MaterialToolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";


export const AppBar = styled(MaterialAppBar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  background: 'rgba( 0, 0, 0, 0.1 )',
  backdropFilter: "blur(10px)",
  position: "fixed",
  padding: "0 100px",
  height: 95,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  [theme.breakpoints.down('sm')]:{
  padding: "0 20px",

  },
  "& .isax-shopping-cart": {
    color: "#fff"
  },
  '&>div': {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>a>h1": {
      color: "#fff"
    }
  }
}));

export const LogoText = styled("h1")<any>(({ theme, color }) => ({
  cursor: "pointer",
  fontSize: 38,
  fontFamily: "Yekan Bakh",
  textShadow: '0 2px 4px rgba(71,97,206,.36)',
  margin: 0,
  // color: theme.palette.mode === "dark" ? "red" : "pink",
  [theme.breakpoints.down("md")]: {
    fontSize: 30
  },
}));