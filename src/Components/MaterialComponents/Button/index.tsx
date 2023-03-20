import React from 'react'
import * as Styled from './styled'

const Button = ({variant, ...props}:any) => {
  return (
    <Styled.Button variant={variant} {...props}/>
  )
}

export default Button