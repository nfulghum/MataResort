import React from 'react';
import ProductHero from '../product/ProductHero';
import ProductInfo from '../product/ProductInfo';
import ProductReviews from '../product/ProductDetails';



const Home = () => {
    return (
        <>
            <ProductHero />
            <ProductInfo />
            <ProductReviews />
        </>
    )
}

export default Home;