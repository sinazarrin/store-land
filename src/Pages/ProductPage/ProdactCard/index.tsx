import { useEffect, useState } from 'react'
import * as Styled from './styled'
import { Grid } from '@mui/material'
import Button from '../../../Components/MaterialComponents/Button'
import { fetchProducts } from '../../../Api/ProductService'

interface Product {
    id: string;
    title: string;
    images: [];
    description: string;
    price: number;
    category: string;
    color: string;
}

const ProductCard = () => {
    const [data, setData] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const { products }: any = await fetchProducts()
            setData(products);
        })()
    }, [])
    return (
        <Styled.CardContainer>
            <Grid>
                <h1>محصولات</h1>
                <Grid>
                    {
                        data.map(product => (
                            <Styled.ProductCard >
                                <a>
                                    <img src="assets/images/joran-quinten-vtiYZsVmC2A-unsplash.jpg" className='mage-card' alt="" />
                                </a>
                                <Styled.CartContent>
                                    <Grid>
                                        <a>
                                            {product.title}
                                        </a>
                                    </Grid>
                                    <Grid>
                                        <p>
                                            وضعیت: موجود
                                        </p>
                                    </Grid>
                                    <Grid>
                                        <span>
                                            {product.price} تومان
                                        </span>
                                    </Grid>
                                    <Grid justifyContent='end'>
                                        <Button variant="contained">اضافه به سبد خرید</Button>
                                    </Grid>
                                </Styled.CartContent>
                            </Styled.ProductCard>
                        ))

                    }
                </Grid>
            </Grid>
        </Styled.CardContainer>
    )
}

export default ProductCard