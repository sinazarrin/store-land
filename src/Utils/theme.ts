import { createTheme } from "@mui/material/styles";

const theme = () =>
  createTheme({
    direction: "rtl",
    palette: {
      primary: {
        main: "#1A5CFF" ,
      },
      secondary: {
        main: "#DDE7FF",
      },
      error: {
        main: "#F34251",
      },
      warning: {
        main: "#F0AF00",
      },
      success: {
        main: "#32B626",
      },
    },
    typography: {
      fontFamily: "YekanBakh, sans-serif",
    },
    mixins: {
      toolbar: {
        height: 104,
      },
    },
  });

export default theme;
