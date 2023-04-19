import { Grid, styled } from "@mui/material";

export const TotalPriceContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 35,
    borderRadius: 15,
    '&>h1':{
        fontSize: 25,
        textAlign: 'center',
        margin: '0 0 10px 0' ,
    },
    '&>div': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
        '&>div>p': {
            color: 'gray'
        }
    },
    '&>button': {
        marginTop: 30,
        fontSize: 16
    }
})