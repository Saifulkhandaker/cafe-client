import { FaAssistiveListeningSystems, FaGlassMartiniAlt, FaSnowflake, FaWifi } from "react-icons/fa";

const ChoseUs = () => {
    return (
        <div className="bg-[#101010] py-20 lg:py-32">
            <div className="text-white text-center  space-y-3">
                <h2 className="text-2xl text-[#C8A077] font-bold">Why Choose Us</h2>
                <h1 className="text-3xl md:text-5xl font-extrabold">Welcome to Our <br /> Coffehouse</h1>
                <p className="text-sm md:text-lg">Our mission since we roasted our first batch of coffee in 1987 is to commitment <br /> giving you the BEST cup of coffee you have ever had.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto mt-10 lg:mt-20">
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
            
        </div>
    );
};

export default ChoseUs;