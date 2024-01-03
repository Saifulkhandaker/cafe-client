import sellerImg from '../assets/Images/Others/best-seller.png';
import background from '../assets/Images/Others/background.png';
import { PiCallBellFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const BestSeller = () => {
    return (
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 10 }} > 
                <div className='px-20 py-20 md:py-36 lg:flex lg:gap-5 hero-overlay bg-opacity-40'>
            {/* img side */}
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                <img className='w-[590px] md:w-[680px] lg:w-[590px]' src={sellerImg} alt="" />
            </div>
            {/* content side */}
            <div className='flex flex-col justify-center space-y-8 text-white'>
                <h1 className='text-center lg:text-left md:text-5xl shared font-bold text-[#C8A077]' data-aos="fade-down" data-aos-duration="2000">OUR BEST SELLER</h1>
                <p className='text-center lg:text-left text-lg ' data-aos="fade-down" data-aos-duration="2000">We're happy to present our best-selling coffees. <br /> Each is a part of us in some way</p>
                <div className='flex gap-8 items-center ' data-aos="fade-down" data-aos-duration="2000">
                    <div className='space-y-2'>
                        <h3 className='text-xl md:text-3xl font-medium '>Caffe Latte</h3>
                        <p className='text-sm md:text-lg '>Fresh brewed coffee and steamed milk</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-[#C8A077]'>3.95$</h3>
                    </div>
                </div>
                <div className='flex gap-8 items-center' data-aos="fade-down" data-aos-duration="2000">
                    <div className='space-y-2'>
                        <h3 className='text-xl md:text-3xl font-medium'>Capucino Cincau</h3>
                        <p className='text-sm md:text-lg '>Fresh brewed coffee and steamed milk</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-[#C8A077]'>3.95$</h3>
                    </div>
                </div>
                <div className='flex gap-8 items-center' data-aos="fade-down" data-aos-duration="2000">
                    <div className='space-y-2'>
                        <h3 className='text-xl md:text-3xl font-medium'>Coffee Mocha Float</h3>
                        <p className='text-sm md:text-lg'>Fresh brewed coffee and steamed milk</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-[#C8A077]'>3.95$</h3>
                    </div>
                </div>
                <Link to="/ourMenu">
                <button className='flex items-center gap-5 text-left text-xl font-medium' data-aos="fade-up" data-aos-duration="2000"><PiCallBellFill  className="bg-[#C8A077] rounded-full text-6xl p-2"/> ORDER NOW</button>
                </Link>
                
            </div>
            </div>
            </div>
    );
};  

export default BestSeller;