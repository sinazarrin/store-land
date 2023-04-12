import { Grid, styled } from "@mui/material";
import Card from "../../../Components/MaterialComponents/Card";

export const CardContainer = styled(Grid)({
    display: 'flex',
    justifyContent: "center",
    height: "100vh",
    marginTop: "5em",
    maxWidth: "1250px",
    margin: " 30px auto",
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

export const ProductCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 311,
    height: 431,
    border: "1px solid #ebebeb",
    padding: "30px 18px 22px",
    margin: "20px 40px",
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
})

export const CartContent = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    "&>div":{
        marginTop: 15,
        display: 'flex',
    },
    "&>div>a":{
        fontSize: 12,
        textAlign: 'center',
        cursor: 'pointer'
    },
    "&>div>p":{
        fontSize: 14,
        fontWeight: '500',
    },
    "&>div>span":{
        fontWeight: "500",
        fontSize: 18
    },
    "&>div>button":{
        fontSize: 16,
        padding: "8px 15px"
    },
})
