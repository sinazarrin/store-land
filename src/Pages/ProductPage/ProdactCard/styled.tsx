import { Grid, styled } from "@mui/material";
import Card from "../../../Components/MaterialComponents/Card";

export const CardContainer = styled(Grid)({
    display: 'flex',
    justifyContent: "center",
    margin: "5em auto 100px auto",
    maxWidth: "1250px",
    "&>div": {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        width: "100%"
    },
    "&>div>div": {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 auto",
    }
})

export const ProductCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 311,
    height: 431,
    border: "1px solid #ebebeb",
    padding: '18px 18px 22px',
    margin: "20px 40px",
    [theme.breakpoints.down('sm')]: {
        margin: "20px 0",
    },
    "&>a": {
        height: 200,
        display: "flex",
        justifyContent: "center",
    },
    "&>a>img": {
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: 15
    }
}))

export const CartContent = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    "&>div": {
        marginTop: 15,
        display: 'flex',
    },
    "&>div>a": {
        fontSize: 15,
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%'
    },
    "&>div>p": {
        fontSize: 14,
        fontWeight: '500',
    },
    "&>div>span": {
        fontWeight: "500",
        fontSize: 18
    },
    "&>div>button": {
        fontSize: 16,
        padding: "8px 15px"
    },
})
