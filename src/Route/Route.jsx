import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurTeam from "../Pages/OurTeam/OurTeam";
import OurMenu from "../Pages/OurMenu/OurMenu";
import ContactUs from "../Pages/ContactUs/ContactUs";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/ourTeam',
                element: <OurTeam></OurTeam>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
