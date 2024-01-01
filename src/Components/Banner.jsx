import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import banner1 from '../assets/Images/Banner/Banner1.jpg'
import banner2 from '../assets/Images/Banner/Banner2.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
                {/* img section */}
                <Swiper 
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                    autoplay={{ delay: 1000}}
                >
                    <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                    
                </Swiper>
            
                {/* text section */}
            <div className='w-[80%] mx-auto text-white text-center space-y-3 absolute inset-0 z-10 flex flex-col justify-center items-center '>
                <h1 className='text-2xl lg:text-7xl '>Coffee is all about <br />
                <span className='font-bold'>People, Care & Passion</span></h1>
                <p className='text-sm lg:text-lg'>From this Assembly Line, Hitek has been producing more than 1000 machines & <br />equipments and continuously manufactures high quality product to meet our various customer needs.</p>
                <Link to="/aboutUs"><button className='btn bg-[#B78D62] text-white border-none hover:bg-[#593D25] lg:text-xl rounded-l-full rounded-r-full'>READ MORE</button></Link>
            </div>
        </div>
    );
};

export default Banner;