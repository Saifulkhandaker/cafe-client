import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import coverimg from '../../assets/Images/Others/cover.jpg'
import about1 from '../../assets/Images/About/about-1.jpg'
import about2 from '../../assets/Images/About/about-2.jpg'
import award from '../../assets/Images/About/awards-example.jpg'
import team1 from '../../assets/Images/Team/team1.jpg'
import team2 from '../../assets/Images/Team/team2.jpg'
import team3 from '../../assets/Images/Team/team3.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | About Us</title>
            </Helmet>
            <Cover img={coverimg} title={'About US'}></Cover>
            {/* page content */}
            <div>
                {/* History part */}
                <div className='lg:flex gap-6 items-center py-20 px-10 md:px-20 bg-[#101010]'>
                    {/* img part */}
                    <div className='lg:w-[500px]'>
                        <img src={about1} alt="" />
                    </div>
                    {/* content part */}
                    <div className='flex-1 space-y-8 mt-5 lg:mt-0'>
                        <h3 className='text-2xl font-bold text-[#C8A077]'>Our History</h3>
                        <h1 className='text-5xl font-bold text-white'>The First Coffee House in Small Town</h1>
                        <p className='text-xl text-[#999999]'>Nowadays, Talking about a tangkopi coffee house brings to mind a cozy place that serves coffee and espresso drinks, with seat to lounge in while you slurp. Do you know how the Dement coffee house get its start? The history of the Dement coffee house begins hundreds of years ago and certainly has changed over the years. Our Coffee in Tangkopi was served unfiltered, black and strong, usually used ibrik as a brewery. We took coffee very seriously, too. </p>
                        <div className='space-y-2'>
                            <h1 className='text-5xl font-bold text-[#C8A077]'>20+</h1>
                            <p className='text-xl font-bold text-white'>Years of <br /> Experience</p>
                        </div>
                    </div>
                </div>
                {/* Service part */}
                <div className='lg:flex flex-row-reverse gap-10 items-center py-32 px-10 md:px-20'>
                    {/* img part */}
                    <div className='lg:w-[500px]'>
                        <img src={about2} alt="" />
                    </div>
                    {/* content part */}
                    <div className='flex-1 space-y-8 mt-5 lg:mt-0'>
                        <h3 className='text-2xl font-bold text-[#C8A077]'>A Sequence of Our Journey</h3>
                        <h1 className='text-4xl lg:text-6xl font-bold text-[#111111]'>Almost 20 Years Serves Coffee With More Than 8,000 Locations</h1>
                        {/* Accordion */}
                        <div className="collapse collapse-plus border py-1 border-[#DDDDDD] rounded-lg">
                        <input type="radio" name="my-accordion-3"  /> 
                        <div className="collapse-title text-xl font-medium text-[#C8A077]">
                            The First Coffee Shop in Town
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-lg text-[#111111] font-medium'>The EMD Phase starts after successful design and analysis review, this is considered as formal start of any program. The goal of this phase is to complete the development of a system or increment of capability</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus  border py-1 border-[#DDDDDD] rounded-lg">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium text-[#C8A077]">
                            Espresso Arrives
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-lg text-[#111111] font-medium'>The EMD Phase starts after successful design and analysis review, this is considered as formal start of any program. The goal of this phase is to complete the development of a system or increment of capability</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus  border py-1 border-[#DDDDDD] rounded-lg">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium text-[#C8A077]">
                            Coffee shops become widespread
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-lg text-[#111111] font-medium'>The EMD Phase starts after successful design and analysis review, this is considered as formal start of any program. The goal of this phase is to complete the development of a system or increment of capability</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus  border py-1 border-[#DDDDDD] rounded-lg">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium text-[#C8A077]">
                                Coffee Shops are Coming Online
                        </div>
                        <div className="collapse-content"> 
                            <p className='text-lg text-[#111111] font-medium'>The EMD Phase starts after successful design and analysis review, this is considered as formal start of any program. The goal of this phase is to complete the development of a system or increment of capability</p>
                        </div>
                        </div>
                        
                        <div className='pt-8 md:pt-10 space-y-2'>
                            <h3 className='text-xl font-bold text-[#AAAAAA]'>O U R _ A W A R D S</h3>
                            <img src={award} alt="" />
                        </div>

                    </div>
                </div>
                {/* team part */}
                <div className='lg:flex gap-10 items-center py-32 px-10 md:px-20 bg-[#F4F4F4]'>
                    {/* img part */}
                    <div className='flex gap-2'>
                        <div className='text-center'>
                            <img className='w-44' src={team1} alt="" />
                            <h2 className='md:text-3xl font-bold mt-5'>John Deb</h2>
                            <p className='text-[#545454] font-medium'>CEO</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-44' src={team2} alt="" />
                            <h2 className='md:text-3xl font-bold mt-5'>Robert</h2>
                            <p className='text-[#545454] font-medium'>Marketing Director</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-44' src={team3} alt="" />
                            <h2 className='md:text-3xl font-bold mt-5'>Jerzy</h2>
                            <p className='text-[#545454] font-medium'>R&D Director</p>
                        </div>
                    </div>
                    {/* content part */}
                    <div className='flex-1 space-y-5 mt-5 lg:mt-0'>
                        <h3 className='text-2xl font-bold text-[#C8A077]'>Our Team</h3>
                        <h1 className='text-4xl lg:text-6xl font-bold'>Our Loyal Barista in <br />Years</h1>
                        <p className='text-xl text-[#999999]'>The history of the tangkopi coffee house begins hundreds of years ago and certainly has changed over the years. Our Coffee in Dement was served unfiltered, black and strong, usually used ibrik as a brewery. We took coffee very seriously, too.  </p>
                        <div>
                            <Link to="/ourTeam">
                                <button className='text-lg font-bold text-white bg-[#C8A077] py-5 px-4 rounded-full'>FIND YOUR FAVOURITE BARISTA</button>
                            </Link>
                        </div>
                        <div className='space-y-2'>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutUs;