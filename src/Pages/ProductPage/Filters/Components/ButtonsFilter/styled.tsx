import { styled } from "@mui/material";

export const ButtonsFilter = styled("div")<any>(({ theme, color }) => ({
    "&>button": {
        fontFamily: "Yekan Bakh",
        fontSize: 17,
        margin: '10px 10px 0 0',
        border: "1px solid ",
        [theme.breakpoints.down("md")]: {
            fontSize: 13,
            padding: 5
        },
    },
    [theme.breakpoints.down("sm")]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '0 5px'
    },
    
    
}));
