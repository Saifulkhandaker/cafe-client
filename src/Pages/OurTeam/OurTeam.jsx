import coverimg from '../../assets/Images/Others/cover.jpg';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import team1 from '../../assets/Images/Team/team1.jpg'
import team2 from '../../assets/Images/Team/team2.jpg'
import team3 from '../../assets/Images/Team/team3.jpg'
import team4 from '../../assets/Images/Team/team4.jpg'
import team5 from '../../assets/Images/Team/team5.jpg'
import team6 from '../../assets/Images/Team/team6.jpg'

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
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* card 1 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team1} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">John Deb</h2>
                        <p className='text-2xl'>CEO</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team2} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Robert</h2>
                        <p className='text-2xl'>Marketing Director</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team3} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Jerzy</h2>
                        <p className='text-2xl'>R&D Director</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team4} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Sandro Costacurta</h2>
                        <p className='text-2xl'>Customer care Director</p>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team5} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Andeij Brzęcze</h2>
                        <p className='text-2xl'>Waiter</p>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={team6} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Clerence Bon</h2>
                        <p className='text-2xl'>Head Cheaf</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;