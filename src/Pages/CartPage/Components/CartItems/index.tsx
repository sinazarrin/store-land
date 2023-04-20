import React from 'react'
import * as Styled from './styled'
import { Divider, Grid, IconButton, Typography } from '@mui/material'

const CartItems = () => {

    return (
        <Styled.CartItemsContainer container spacing={2} xs={7}>
            <Styled.CartItemsContent item gap={5} xs={12}>
                <Grid xs={2}>
                    <img src="./assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg" alt="" />
                </Grid>
                <Grid xs={2}>
                    <Typography variant="body2" component="span" color="gray">تیشرت</Typography>
                    <Typography variant='body2'>
                        بوت مردانه مدل G
                    </Typography>
                </Grid>
                <Styled.Quantity xs={2}>
                    <button>+</button>
                    <Typography variant="body2">0</Typography>
                    <button>-</button>
                </Styled.Quantity>
                <Grid xs={1}>
                    0.25$
                </Grid>
                <Grid xs={1}>
                    <IconButton>
                        <i className='isax isax-trash'></i>
                    </IconButton>
                </Grid>
            </Styled.CartItemsContent>

            <Styled.CartItemsContent item gap={5} xs={12}>
                <Grid xs={2}>
                    <img src="./assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg" alt="" />
                </Grid>
                <Grid xs={2}>
                    <Typography variant="body2" component="span" color="gray">تیشرت</Typography>
                    <Typography variant='body2'>
                        بوت مردانه مدل G
                    </Typography>
                </Grid>
                <Styled.Quantity xs={2}>
                    <button>+</button>
                    <Typography variant="body2">0</Typography>
                    <button>-</button>
                </Styled.Quantity>
                <Grid xs={1}>
                    0.25$
                </Grid>
                <Grid xs={1}>
                    <IconButton>
                        <i className='isax isax-trash'></i>
                    </IconButton>
                </Grid>
            </Styled.CartItemsContent>

            <Styled.CartItemsContent item gap={5} xs={12}>
                <Grid xs={2}>
                    <img src="./assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg" alt="" />
                </Grid>
                <Grid xs={2}>
                    <Typography variant="body2" component="span" color="gray">تیشرت</Typography>
                    <Typography variant='body2'>
                        بوت مردانه مدل G
                    </Typography>
                </Grid>
                <Styled.Quantity xs={2}>
                    <button>+</button>
                    <Typography variant="body2">0</Typography>
                    <button>-</button>
                </Styled.Quantity>
                <Grid xs={1}>
                    0.25$
                </Grid>
                <Grid xs={1}>
                    <IconButton>
                        <i className='isax isax-trash'></i>
                    </IconButton>
                </Grid>
            </Styled.CartItemsContent>
        </Styled.CartItemsContainer>
    )
}

export default CartItems