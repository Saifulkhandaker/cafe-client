import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import coverimg from '../../assets/Images/Others/cover.jpg';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Contact</title>
            </Helmet>
            <Cover img={coverimg} title={"Contact Us"}></Cover>
             {/* map */}
            <div className="w-11/12 mx-auto my-20 border-2 border-[#262626] px-2 py-2" data-aos="zoom-in" data-aos-duration="2000">
                <iframe className="w-full h-[300px] md:h-[400px] "
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6726.337103163644!2d-0.06860155763503091!3d51.40018012533551!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1702371046901!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            {/* contact information */}
            <div className='w-[90%] mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='text-center flex flex-col items-center justify-center bg-[#F0F0F0] py-16 px-6 space-y-6' data-aos="flip-left" data-aos-duration="2000">
                    <p className='text-5xl text-[#C8A077]'><FaLocationDot /></p>
                    <h3 className='text-2xl font-bold teax-[#111111]'>ADDRESS</h3>
                    <h3 className='text-xl font-medium text-[#949090]'>PO Box <br />16122 <br /> Collins Street 8007 <br /> Australia</h3>
                </div>
                <div className='text-center flex flex-col items-center justify-center bg-[#F0F0F0] py-16 px-6 space-y-6' data-aos="flip-left" data-aos-duration="2000">
                    <p className='text-5xl text-[#C8A077]'><FaPhone /></p>
                    <h3 className='text-2xl font-bold teax-[#111111]'>PHONE</h3>
                    <h3 className='text-xl font-medium text-[#949090]'>+61 <br />824446345 <br /> +61 <br /> 811343987</h3>
                </div>
                <div className='text-center flex flex-col items-center justify-center bg-[#F0F0F0] py-16 px-6 space-y-6' data-aos="flip-left" data-aos-duration="2000">
                    <p className='text-5xl text-[#C8A077]'><HiOutlineMailOpen /></p>
                    <h3 className='text-2xl font-bold teax-[#111111]'>EMAIL</h3>
                    <h3 className='text-xl font-medium text-[#949090]'>halo@dement.com<br /> cs@dement.com</h3>
                </div>
                <div className='text-center flex flex-col items-center justify-center bg-[#F0F0F0] py-16 px-6 space-y-6' data-aos="flip-left" data-aos-duration="2000">
                    <p className='text-5xl text-[#C8A077]'><MdAccessTimeFilled /></p>
                    <h3 className='text-2xl font-bold teax-[#111111]'>COFFEE <br />HOURS</h3>
                    <h3 className='text-xl font-medium text-[#949090]'>Tuesday - <br />Sunday <br />10:00am - <br />11:30pm</h3>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;