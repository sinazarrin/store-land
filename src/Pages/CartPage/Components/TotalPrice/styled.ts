import { Grid, styled } from "@mui/material";

export const TotalPriceContainer = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height: 300,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 35,
    borderRadius: 15,
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]:{
      width: '100%',
      height: 250,
      position: 'fixed',
      bottom: 0,
      borderRadius: 0,
      padding: 18,
      boxShadow: '0 2px 15px 14px rgba(99, 99, 99, 0.2)',
    },
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

}))