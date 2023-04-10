import { styled } from "@mui/material";

export const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    "&>div":{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0px",
    }
})