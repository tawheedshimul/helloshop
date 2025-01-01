import React from 'react';
import ProductPage from '../ProductCategory/ProductPage';
import CategoryPage from '../ProductCategory/CategoryPage';
import ProductCartPage from '../../Shared/Cart/ProductCartPage';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <div className='z-10 mt-[-23px]'>
            <HeroSection />
            <CategoryPage />
            <ProductCartPage />
        </div>
    );
};

export default Home;