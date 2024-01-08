import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover';
import menucover from '../../assets/Images/Others/Menu Cover.jpg';
import menu from '../../assets/Images/Others/Menu.png'

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>NyaBiss | Menu</title>
            </Helmet>
            <Cover img={menucover} title={"Our Menu"}></Cover>
            {/* Menu section */}
            <div className='w-[90%] mx-auto space-y-10 py-28'>
                <h1 className='shared text-center text-3xl md:text-6xl '>Drinks & Beverages</h1>
                <p className='text-center md:text-2xl text-[#363636] font-sans'>Drinks and beverages encompass a vast array of liquid consumables, <br /> from refreshing juices and sodas to energizing coffees and soothing teas. <br />They quench thirst, provide diverse flavors, and often serve <br /> as social catalysts, enhancing various culinary experiences.</p>
                <img className='w-full lg:pt-10' src={menu} alt="" />
            </div>
        </div>
    );
};

export default OurMenu;