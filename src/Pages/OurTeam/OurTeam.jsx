import coverimg from '../../assets/Images/Others/Our Team.jpg'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import Cover from '../Shared/Cover';
import team1 from '../../assets/Images/Team/team1.jpg'
import team2 from '../../assets/Images/Team/team2.jpg'
import team3 from '../../assets/Images/Team/team3.jpg'
import team4 from '../../assets/Images/Team/team4.jpg'
import team5 from '../../assets/Images/Team/team5.jpg'
import team6 from '../../assets/Images/Team/team6.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OurTeam = () => {

    const formRef = useRef();

    const handleform = (e) => {
        e.preventDefault();
        toast.success(' Successfully Submitted...!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            formRef.current.reset();

    } 

    return (
        <div>
            <Helmet>
                <title>NyaBiss | Team</title>
            </Helmet>
            <Cover img={coverimg} title={'Our Team'}></Cover>
            {/* page content */}
            <div className='w-[90%] mx-auto lg:flex gap-20 items-center py-20 overflow-x-hidden'>
                <div className='space-y-3' data-aos="fade-right" data-aos-duration="2000">
                    <h3 className='text-3xl font-bold text-[#C8A077]'>Our Experts</h3>
                    <h1 className='text-4xl lg:text-6xl font-bold text-[#111111]'>Meet Our Team</h1>
                </div>
                <div className='lg:w-[70%] mx-auto' data-aos="fade-left" data-aos-duration="2000">
                    <h3 className='text-2xl text-[#3B3B3B] font-medium leading-relaxed'>Our team members work collaboratively to ensure guests have a comfortable stay. From front desk staff to housekeeping and catering, each member contributes to exceptional hospitality and memorable experiences.</h3>
                </div>
            </div>
            {/* member parts */}
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20 overflow-x-hidden'>
                {/* card 1 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team1} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">John Deb</h2>
                        <p className='text-2xl'>CEO</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team2} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Robert</h2>
                        <p className='text-2xl'>Marketing Director</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team3} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Jerzy</h2>
                        <p className='text-2xl'>R&D Director</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team4} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Sandro Costacurta</h2>
                        <p className='text-2xl'>Customer care Director</p>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team5} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Andeij Brzęcze</h2>
                        <p className='text-2xl'>Waiter</p>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card card-compact  bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img src={team6} alt="Team" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Clerence Bon</h2>
                        <p className='text-2xl'>Head Cheaf</p>
                    </div>
                </div>
            </div>
            {/* Join Us */}
            <div className='bg-[#E3E4E8] '>
                <div className='w-[90%] mx-auto py-20 lg:flex justify-between items-center overflow-x-hidden'>
                    <div className='flex-1 space-y-5' data-aos="fade-left" data-aos-duration="2000">
                        <h3 className='text-3xl font-bold text-[#C8A077]'>Let's Grow Together</h3>
                        <h1 className='text-3xl lg:text-5xl font-bold text-[#111111] leading-relaxed'>Are you in need of a job? <br /> We always welcomes you</h1>
                        <button className='flex items-center gap-3 text-2xl font-bold text-white py-3 px-5 border rounded-full bg-[#C8A077]'>Join Us <FaArrowAltCircleRight /> </button>
                    </div>
                    <div className='flex-1 w-full' data-aos="zoom-in" data-aos-duration="2000">
                        <h3 className='text-3xl font-bold text-[#3B3B3B] lg:text-center pb-10 mt-10 lg:mt-0'>Fill This Form</h3>
                        <form onSubmit={handleform} ref={formRef} className='space-y-2 border-2 border-[#f0f0f0] px-5 py-5'>
                                <input type="text" placeholder="Your Name" required className="text-[#474747] input input-bordered w-full" />
                                <input type="number" placeholder="Phone Number" required className="text-[#474747] input input-bordered w-full" />
                                <input type="text" placeholder="Address" required className="text-[#474747] input input-bordered w-full" />
                                <select
                                    name="priority" placeholder="Looking Position" required className="text-[#474747] select select-bordered w-full ">
                                    <option>Cheaf</option>
                                    <option>Waiter</option>
                                    <option>Director</option>
                                </select>
                                <input type="email" placeholder="Your Email" required className="text-[#474747] input input-bordered w-full" />
                                <input type="submit" value="SUBMIT" className="text-white text-lg font-bold bg-[#C8A077] input input-bordered w-full" />
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default OurTeam;