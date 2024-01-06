import coverimg from '../../assets/Images/Others/cover.jpg';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';

const OurTeam = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Team</title>
            </Helmet>
            <Cover img={coverimg} title={'Our Team'}></Cover>
            {/* page content */}
            <div className='w-[90%] mx-auto lg:flex gap-20 items-center py-20'>
                <div className='space-y-3'>
                    <h3 className='text-3xl font-bold text-[#C8A077]'>Our Experts</h3>
                    <h1 className='text-4xl lg:text-6xl font-bold text-[#111111]'>Meet Our Team</h1>
                </div>
                <div className='lg:w-[70%] mx-auto'>
                    <h3 className='text-2xl text-[#3B3B3B] font-medium leading-relaxed'>Our team members work collaboratively to ensure guests have a comfortable stay. From front desk staff to housekeeping and catering, each member contributes to exceptional hospitality and memorable experiences.</h3>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;