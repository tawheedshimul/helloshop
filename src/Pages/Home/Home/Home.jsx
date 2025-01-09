import React from 'react';
import ProductPage from '../ProductCategory/ProductPage';
import CategoryPage from '../ProductCategory/CategoryPage';
import ProductCartPage from '../../Shared/Cart/ProductCartPage';
import HeroSection from '../HeroSection/HeroSection';
import NewArrival from '../NewArrival/NewArrival';
import NewProduct from '../NewProduct/NewProduct';
import AudioPlayer from './MP';
import Carousel from '../Carousel/Carousel';
import CarouselTest from '../Carousel/CarouselTest';
import ProductSearchCard from '../../Shared/Search/Searchwork';

const Home = () => {
    return (
        <div className='z-10 mt-[-26px]'>
            {/* <AudioPlayer /> */}
            {/* <Carousel /> */}
            
            <CarouselTest />
            {/* <HeroSection /> */}
            <CategoryPage />
            {/* <ProductCartPage /> */}
            <NewArrival />
            <NewProduct />
            <ProductSearchCard />
        </div>
    );
};

export default Home;