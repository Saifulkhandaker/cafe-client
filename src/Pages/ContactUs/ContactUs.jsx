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
        </div>
    );
};

export default ContactUs;