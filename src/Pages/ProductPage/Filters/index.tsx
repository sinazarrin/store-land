
import { Grid } from '@mui/material'
import * as Styled from "./styled"
import FilterButtons from './Components/ButtonsFilter'
import SearchFilter from './Components/SearchFilter'

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