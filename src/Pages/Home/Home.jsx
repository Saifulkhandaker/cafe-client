import React from 'react';
import Banner from '../../Components/Banner';
import ChoseUs from '../../Components/ChoseUs';
import BestSeller from '../../Components/BestSeller';
import Offer from '../../Components/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChoseUs></ChoseUs>
            <BestSeller></BestSeller>
            <Offer></Offer>
        </div>
    );
};

export default Home;