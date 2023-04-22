import { styled } from "@mui/material";

export const Container = styled("div")<any>(({ theme, color }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    alignItems: 'center',
    "&>div":{
        display: "flex",
        width: 1250,
        justifyContent: "space-between",
        alignItems: 'center',
        margin: "20px 0px",
        [theme.breakpoints.down("md")]: {
            fontSize: 14,
            flexDirection: 'column', 
            alignItems: 'center',
            height: 100,
        },
    }
}))