import { Grid, styled } from '@mui/material'



export const CartPageContainer = styled(Grid)({
    '&>h1':{
        marginRight: 80,
    },
    '&>div': {
        display: 'flex',
        padding: 0,
        justifyContent: 'center',
    }
})