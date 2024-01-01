import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/Others/logo-white.png"
import { HiShoppingCart } from "react-icons/hi";


const Navbar = () => {
        const navlinks = <>
            <li><NavLink className="text-[16px] font-medium rounded-sm " to="/">Home</NavLink></li>
            <li><NavLink className="text-[16px] font-medium rounded-sm " to="/aboutUs">About Us</NavLink></li>
            <li><NavLink className="text-[16px] font-medium rounded-sm " to="/ourTeam">Our Team</NavLink></li>
            <li><NavLink className="text-[16px] font-medium rounded-sm " to="/ourMenu">Our Menu</NavLink></li>
            <li><NavLink className="text-[16px] font-medium rounded-sm " to="/contactUs">Contact Us</NavLink></li>
        </>
    return (
        <div className="text-white border-b" >
            <div className="navbar bg-[#3D291C] lg:px-10">
                <div className="navbar-start z-30 ">
                    <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="bg-[#3D291C] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                    </div>
                    <img className="w-16" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {/*  */}
                    <Link to="/myCart">
                        <button className="flex items-center gap-2">
                        <HiShoppingCart className="text-xl"/> 
                            <div className="badge badge-secondary">+0</div>
                        </button>
                    </Link>
                    <Link to="/login"><button className="text-[16px] text-white rounded-lg bg-[#B78D62] border-none  font-medium rounded-sm border btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;