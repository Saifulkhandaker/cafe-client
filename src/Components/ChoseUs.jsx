import { FaAssistiveListeningSystems, FaGlassMartiniAlt, FaSnowflake, FaWifi } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import choose1 from '../assets/Images/Choose/Choose1.jpg'
import choose2 from '../assets/Images/Choose/Choose2.jpg'

const ChoseUs = () => {
    return (
        <div className="bg-[#101010] py-20 lg:py-32">
            <div className="text-white text-center  space-y-3">
                <h2 className="text-2xl text-[#C8A077] font-bold">Why Choose Us</h2>
                <h1 className="text-3xl md:text-5xl font-extrabold">Welcome to Our <br /> Coffehouse</h1>
                <p className="text-sm md:text-lg">Our mission since we roasted our first batch of coffee in 1987 is to commitment <br /> giving you the BEST cup of coffee you have ever had.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto mt-10 lg:mt-20">
                <div className=" text-center flex flex-col items-center space-y-3 text-white bg-[#1C1C1C] py-16 px-3">
                    <p className="text-[#C8A077] text-7xl"><FaGlassMartiniAlt /></p>
                    <h3 className="text-xl font-bold">Inhouse Restaurant</h3>
                    <p className="text-lg text-center">Not so many years ago nesses used to <br /> grunt at using</p>
                </div>
                <div className=" text-center flex flex-col items-center space-y-3 text-white bg-[#1C1C1C] py-16 px-3">
                    <p className="text-[#C8A077] text-7xl"><FaSnowflake /></p>
                    <h3 className="text-xl font-bold">Luxuary Spa</h3>
                    <p className="text-lg text-center">Not so many years ago nesses used to <br /> grunt at using</p>
                </div>
                <div className=" text-center flex flex-col items-center space-y-3 text-white bg-[#1C1C1C] py-16 px-3">
                    <p className="text-[#C8A077] text-7xl"><FaAssistiveListeningSystems /></p>
                    <h3 className="text-xl font-bold">Swimming Pool</h3>
                    <p className="text-lg text-center">Not so many years ago nesses used to <br /> grunt at using</p>
                </div>
                <div className=" text-center flex flex-col items-center space-y-3 text-white bg-[#1C1C1C] py-16 px-3">
                    <p className="text-[#C8A077] text-7xl"><FaWifi /></p>
                    <h3 className="text-xl font-bold">Fast Wifi Connect</h3>
                    <p className="text-lg text-center">Not so many years ago nesses used to <br /> grunt at using</p>
                </div>
            </div>
            {/* 2nd part */}
            <div className="lg:flex lg:gap-16 justify-between w-[90%] mx-auto mt-14 lg:mt-20">
                {/* text part */}
                <div className="lg:w-[30%] lg:flex flex-col lg:justify-center text-white space-y-6">
                    <h1 className="text-5xl lg:text-7xl font-bold">Come and enjoy the <span className="text-[#C8A077]">relaxing</span> atmosphere</h1>
                    <p className="text-lg">Our mission since we roasted our first batch of coffee in 1987 is to commitment giving you the BEST cup of coffee you have ever had</p>
                    <a href="https://www.youtube.com/watch?v=rVvupjCcYZo" target="_blank"><button className="flex items-center font-bold gap-4 text-center mt-3 lg:mt-0 "><IoIosVideocam className="bg-[#C8A077] rounded-full text-6xl p-2"/> WATCH OUR VIDEO</button></a>
                </div>
                {/* img part */}
                <div className="flex flex-row items-center  gap-2 md:gap-3 mt-5 lg:mt-0"> 
                    <img className="w-[188px] md:w-[342px] lg:w-[380px] lg:h-fit" src={choose1} alt="" />
                    <img className="w-[188px] md:w-[342px] lg:w-[380px] lg:h-fit" src={choose2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;