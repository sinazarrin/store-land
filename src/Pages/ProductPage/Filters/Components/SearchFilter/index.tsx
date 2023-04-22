import React from 'react'
import * as Styled from './styled'

const SearchFilter = () => {
  return (
    <Styled.SearchFilter>
      <Styled.SearchIconWrapper>
      </Styled.SearchIconWrapper>
      <Styled.StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Styled.SearchFilter>
  )
}

export default SearchFilter