import offer1 from '../assets/Images/Offers/offer1.jpg';
import offer2 from '../assets/Images/Offers/offer2.jpg';
import time from '../assets/Images/Offers/Open time.png'
import ceo from '../assets/Images/Offers/ceo.jpg'
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import { MdOutlinePhoneForwarded } from "react-icons/md";

const Offer = () => {
    return (
        <>
            <div className='w-[90%] mx-auto my-20 lg:flex justify-center gap-20'>
            {/* Left side */}
            <div className='relative' data-aos="fade-down" data-aos-duration="2000">
                <img className='lg:w-[500px] h-[650px] hero-overlay opacity-60 ' src={offer1} alt="" />
                <div className='absolute inset-0 flex flex-col justify-center left-8 text-left space-y-5'>
                    <p className='text-3xl font-bold text-white'>Our Barista in Action</p>
                    <h1 className='text-5xl font-bold text-[#333333]'>Preparing our <br />inHouse Brewed <br />Tergaatelli Coffee</h1>
                    <a href="https://www.youtube.com/watch?v=rVvupjCcYZo" target="_blank"><FaPlay className='bg-white rounded-full text-7xl py-6 px-3  text-[#C39C75]' /></a>
                </div>
            </div>
            {/* Right side */}
            <div className='space-y-4' data-aos="fade-down" data-aos-duration="2000">
                <img className='md:w-full lg:w-[500px] lg:h-[250px] mt-10 lg:mt-0' src={offer2} alt="" />
                <div className='flex justify-between lg:justify-between md:justify-evenly'>
                    <img className='w-[190px] md:w-[340px] lg:w-[240px] h-[380px]' src={time} alt="" />
                    <div className='flex flex-col justify-center space-y-5  w-[190px] md:w-[340px] lg:w-[240px] h-[380px] border-8 border-[#333333] bg-[#060708] text-white text-xl font-bold text-center'>
                        <h3 className='text-2xl'>Table <br /> Reservation</h3>
                        <p>08224448080</p>
                        <p>08225558585</p>
                        <p className='flex justify-center'><MdOutlinePhoneForwarded className='text-3xl text-[#C8A077]' /></p>
                    </div>
                </div>
            </div>  
        </div>
        {/* Qoute section */}
            <div className='w-[90%] mx-auto flex flex-col items-center justify-center mb-10' data-aos="zoom-in" data-aos-duration="2000">
                <p className='text-[#DDDDDD] text-6xl font-bold '><FaQuoteLeft /></p>
                <h1 className='text-3xl md:text-5xl text-[#464855] font-serif text-center mt-10'>"Just stopped here for a cup of coffee and I was extremely surprised with the environment! Very good place, good food and good coffee!"</h1>
                <img className='w-20 rounded-full mt-16' src={ceo} alt="" />
                <h3 className='text-2xl font-bold text-[#464855]'>John Alkatiri</h3>
                <p className='text-lg font-medium text-[#464855]'>CEO, Jabejo Jaya Abadi</p>
            </div>
        </>
        
    );
};

export default Offer;