
import { Grid } from '@mui/material'
import * as Styled from "./styled"
import FilterButtons from './ButtonsFilter'

const Filters = () => {
  return (
    <Styled.Container>
      <Grid>
        <FilterButtons/>
      </Grid>
    </Styled.Container>
  )
}

export default Filters