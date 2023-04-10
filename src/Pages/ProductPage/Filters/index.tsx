
import { Grid } from '@mui/material'
import * as Styled from "./styled"
import FilterButtons from './ButtonsFilter'
import SearchFilter from './SearchFilter'

const Filters = () => {
  return (
    <Styled.Container>
      <Grid>
        <SearchFilter/>
        <FilterButtons/>
      </Grid>
    </Styled.Container>
  )
}

export default Filters