import { Box, Grid } from '@mui/material'
import * as Styled from './styled'
import Button from '../../../../Components/MaterialComponents/Button'

const TotalPrice = () => {
  return (
    <Styled.TotalPriceContainer xs={3}>
      <h1>پرداخت محصول</h1>
      <Grid>
        <Box>
          <p>قیمت کالاها(1):</p>
        </Box>
        <Box>
          <p>320,000 تومان</p>
        </Box>
      </Grid>
      <Grid>
        <Box>
          <p>قیمت کالاها(1):</p>
        </Box>
        <Box>
          <p>320,000 تومان</p>
        </Box>
      </Grid>
        <Button variant="contained">ثبت سفارش</Button>
    </Styled.TotalPriceContainer>
  )
}

export default TotalPrice