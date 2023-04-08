import { styled } from "@mui/material/styles"

export const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg')",
    backgroundSize: "cover",
});

export const ContentBanner = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    width: "57%",

    "&>h1":{
        fontSize: "6em",
        color: "#0e3742",
        textTransform: "uppercase",
        width: "100%",
        WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0004)',
        lineHeight: "0.70em",
        outline: "none",
        animation: "animate 5s linear infinite",
        cursor: "pointer",
        textAlign: "center",
        marginBottom: "50px",
        '@keyframes animate': {
            '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
              color: 'transparent',
              textShadow: 'none',
            },
            '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
              color: '#2196f3',
              textShadow:
                '0 0 10px #2196f3, \
                0 0 25px #2196f3, \
                0 0 40px #2196f3, \
                0 0 80px #2196f3, \
                0 0 160px #2196f3',
            },
          },
    },

    "&>p": {
        color: "#fff",
        lineHeight: "2",
        fontSize: "15px",
        fontWeight: "500",
    }
});