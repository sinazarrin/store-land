import { Grid, styled } from '@mui/material'

export const CartPageContainer = styled(Grid)(({theme}) => ({
    marginBottom:400,
    '&>h1':{
        marginRight: 80,
    },
    '&>div': {
        display: 'flex',
        padding: 0,
        justifyContent: 'center',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column'
        }
    },
}))