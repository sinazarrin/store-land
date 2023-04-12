import React from 'react'
import { Card } from '../../../Components/MaterialComponents/Card/styled'
import * as Styled from './styled'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Button from '../../../Components/MaterialComponents/Button'

const ProductCard = () => {
    return (
        <Styled.CardContainer>
            <Grid>
                <h1>محصولات</h1>
                <Grid>
                    <Styled.ProductCard >
                        <a>
                            <img src="assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg" className='mage-card' alt="" />
                        </a>
                        <Styled.CartContent>
                            <Grid>
                                <a>
                                    لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020
                                </a>
                            </Grid>
                            <Grid>
                                <p>
                                    وضعیت: موجود
                                </p>
                            </Grid>
                            <Grid>
                                <span>
                                    45,500,000 تومان
                                </span>
                            </Grid>
                            <Grid justifyContent='end'>
                                <Button variant="contained">اضافه به سبد خرید</Button>
                            </Grid>
                        </Styled.CartContent>
                    </Styled.ProductCard>
                </Grid>
            </Grid>
        </Styled.CardContainer>
    )
}

export default ProductCard