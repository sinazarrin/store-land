import { Grid, styled } from '@mui/material'

export const CartItemsContainer = styled(Grid)({
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '0 35px 35px 35px',
    borderRadius: 15,
    margin: 0,
    "&>hr":{
        width: '80%'
    }
})

export const CartItemsContent = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    padding: '0 15px 0 0',
    borderRadius: 16,
    alignItems:'center',
    "&>hr":{
        width: '100%'
    },
    "&>div>img":{
        width: '110px',
        borderRadius: '8px',
        objectFit: 'cover'
    },
    "&>div>button>i":{
        fontSize: 18,
        color: " #B00020",
        cursor: 'pointer',
        transition: 'all 0.5s',
       
    }
})

export const Quantity = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    "&>button":{
        width: 35,
        height: 20,
        border: '1px solid gray',
        borderRadius: 5,
        backgroundColor: '#f3f6fe',
        cursor: 'pointer',
    },
    "&>p":{
        margin: '0 10px'
    },
})