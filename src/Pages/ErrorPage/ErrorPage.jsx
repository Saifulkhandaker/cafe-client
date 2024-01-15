import { Link } from "react-router-dom";
import error from "../../assets/Images/Others/404.gif"

const ErrorPage = () => {
    return (
        <div className='w-[90%] mx-auto h-[60vh] mt-20 flex flex-col justify-center items-center text-center'>
            <img src={error} alt="" />
            <Link to="/">
                <button className='bg-[#bb8754] text-white font-medium py-2 px-4'>GO HOME</button>
            </Link>
            
        </div>
);
};

export default ErrorPage;