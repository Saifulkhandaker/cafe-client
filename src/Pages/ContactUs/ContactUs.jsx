import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import coverimg from '../../assets/Images/Others/cover.jpg';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Contact</title>
            </Helmet>
            <Cover img={coverimg} title={"Contact Us"}></Cover>
             {/* map */}
            <div className="w-11/12 mx-auto my-20 border-2 border-black px-2 py-2" data-aos="zoom-in" data-aos-duration="2000">
                <iframe className="w-full h-[300px] md:h-[400px] "
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6726.337103163644!2d-0.06860155763503091!3d51.40018012533551!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1702371046901!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;