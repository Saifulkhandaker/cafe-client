import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import menucover from '../../assets/Images/Others/Menu Cover.jpg'

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Menu</title>
            </Helmet>
            <Cover img={menucover} title={"Our Menu"}></Cover>
        </div>
    );
};

export default OurMenu;