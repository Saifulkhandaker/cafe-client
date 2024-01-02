import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import footerbg from '../../assets/Images/Others/footerbg.jpg'


const Footer = () => {

    const hanldesubscribe = (e) => {
        e.preventDefault()
        Swal.fire("Subscribed Sucessfully!🎊");
        const form = e.target;
        form.reset();
    }

    return (
        <div style={{ backgroundImage: `url(${footerbg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 10 }} className="">
            <div className='pt-28 pb-5 hero-overlay bg-opacity-40 space-y-10'>
                {/* newlater section */}
            <div className="text-center space-y-3 text-white">
                <h1 className="text-5xl font-bold">Join our Newsletter</h1>
                <p className=" lg:text-xl">Join our list and get 20% off your first purchase! Do not worry we don’t spam.</p>
               <div className="md:flex gap-3 justify-center w-[90%] mx-auto pt-10">
                    
                        <form onSubmit={hanldesubscribe} className='md:flex justify-center gap-5 mt-5 md:mt-0'>
                            <input className="w-full flex-1 border rounded-full py-5 px-5 text-xl text-black" required type="text" placeholder="Name" />
                                <div className='md:mt-0 mt-2'>
                                    <input className=" border rounded-full rounded-r-none py-5 px-5 text-xl text-black" required type="email" placeholder="Email" />
                                    <input className='border rounded-full rounded-l-none py-5 px-5 text-xl font-bold bg-[#C8A077]' type='submit' placeholder='SUBSCRIBE'/>
                                </div>
                         </form>
                    
               </div>
            </div>
            {/* address section */}
            <div className="md:flex justify-center gap-20 mt-10 md:pl-0 pl-10 w-[90%] mx-auto text-white">
                <div className="md:text-right">
                    <h3 className="text-2xl font-bold">Our First Shop</h3>
                    <p className="text-lg font-medium">Nyabiss Coffeshop</p>
                    <p className="text-lg font-medium">Jalan Tuanku Abdul Rahman 50100</p>
                    <p className="text-lg font-medium">Ahmadebad, India</p>
                    <p className="text-lg font-medium">Telp. +61 8790 1708</p>
                    <p className="text-lg font-medium">Fax. +61 8790 1703</p>
                </div>
                <div className="md:text-left mt-10 md:mt-0">
                    <h3 className="text-2xl font-bold">Our Second Shop</h3>
                    <p className="text-lg font-medium">Nyabiss Coffeshop</p>
                    <p className="text-lg font-medium">Jalan Tuanku Abdul Rahman 50100</p>
                    <p className="text-lg font-medium">Ahmadebad, India</p>
                    <p className="text-lg font-medium">Telp. +61 8790 1708</p>
                    <p className="text-lg font-medium">Fax. +61 8790 1703</p>
                </div>
            </div>
            <p className='w-[80%] mx-auto text-center mt-0 text-white text-sm border-t py-2'>© 2024 nyabiss.com. All right reserved</p>
            </div>
            
            
        </div>
    );
};

export default Footer;