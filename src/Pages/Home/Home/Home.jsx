import React from 'react';
import ProductPage from '../ProductCategory/ProductPage';
import CategoryPage from '../ProductCategory/CategoryPage';
import ProductCartPage from '../../Shared/Cart/ProductCartPage';

const Home = () => {
    return (
        <div className='z-10'>
            <CategoryPage/>
            <ProductCartPage/>
        </div>
    );
};

export default Home;