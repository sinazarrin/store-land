import { Grid, styled } from '@mui/material'

export const CartItemsContainer = styled(Grid)({
    marginTop: 95,
    "&>hr":{
        width: '100%'
    }
})

export const CartItemsContent = styled(Grid)({
    display: 'flex',
    padding: 15,
    borderRadius: 16,
    alignItems:'center',
    
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