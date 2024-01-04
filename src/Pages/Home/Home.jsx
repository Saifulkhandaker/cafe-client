import React from 'react';
import Banner from '../../Components/Banner';
import ChoseUs from '../../Components/ChoseUs';
import BestSeller from '../../Components/BestSeller';
import Offer from '../../Components/Offer';
import Blogs from '../../Components/Blogs';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Home</title>
            </Helmet>
            <Banner></Banner>
            <ChoseUs></ChoseUs>
            <BestSeller></BestSeller>
            <Offer></Offer>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;