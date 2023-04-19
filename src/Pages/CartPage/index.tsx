
import { Grid, Typography } from '@mui/material'
import CartItems from './Components/CartItems'
import TotalPrice from './Components/TotalPrice'
import * as Styled from './styled'

const CartPage = () => {
  return (
    <Styled.CartPageContainer marginTop={15} >
      <h1>سبد خرید</h1>
      <Grid gap={3}>
        <CartItems />
        <TotalPrice />
      </Grid>
    </Styled.CartPageContainer>
  )
}

export default CartPage