import { styled } from "@mui/material";

export const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    "&>div":{
        display: "flex",
        width: 1250,
        justifyContent: "space-between",
        margin: "20px 0px",
    }
})