import { styled } from '@mui/material'
import React from 'react'

export const FooterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 0',
  height: 150,
  backgroundColor: '#26272b',
  color: '#fff',
  '&>h1':{
    margin: '0.25rem 0'
  },
  '&>div':{
    display: 'flex',
    margin: '0 0'
  },
  '&>p':{
    fontSize: 15,
    color: '#737373',
  },
  '&>div>a>svg':{
    margin: '10px 0 0 10px',
    color: '#737373',
    
    '&:hover': {
      color: '#1A5CFF'
    }
  },
})