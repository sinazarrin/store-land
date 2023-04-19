
import CartItems from './Components/CartItems'
import TotalPrice from './Components/TotalPrice'
import * as Styled from './styled'

const CartPage = () => {
  return (
    <Styled.CartPageContainer marginTop={15}> 
        <CartItems/>
        <TotalPrice/>
    </Styled.CartPageContainer>
  )
}

export default CartPage