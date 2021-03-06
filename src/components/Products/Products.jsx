import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles.js'
const products = [
    { id: 1, name: " Shoes", description: "Running shoes", price: '$5', image: 'https://friendlyshoes.com/wp-content/uploads/Friendly-Shoes-Womens-Voyage-Low-Top-Mint-Peach-Shoe-Featured.jpg' },
    { id: 2, name: "Macbook", description: "Apple Macbook", price: '$5', image: 'https://hc.com.vn/i/ecommerce/media/GS.007152_FEATURE_74775.jpg' },
]
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products