import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedVedio from '../FeaturedVedio/FeaturedVedio';
import CardProduct from '../CardProduct/CardProduct';
import GalleryProducts from '../GalleryProducts/GalleryProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardProduct></CardProduct>
            <FeaturedVedio></FeaturedVedio>
            <GalleryProducts></GalleryProducts>
        </div>
    );
};

export default Home;