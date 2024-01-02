import blog1 from '../assets/Images/Blogs/blog1.jpg'
import blog2 from '../assets/Images/Blogs/blog2.jpg'
import blog3 from '../assets/Images/Blogs/blog3.jpg'

const Blogs = () => {
    return (
        <div className="my-20 bg-[#E9E8E4]">
            <div className="py-20 md:py-28">
                {/* Header section */}
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#C8A077]">Latest Blog</h3>
                    <h1 className="text-5xl font-bold">Redeem Our Promos</h1>
                </div>
                {/* Card secton */}
                <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
                    <div className='bg-white space-y-3'>
                        <img className='w-full h-[400px]' src={blog1} alt="" />
                        <h2 className='hover:text-[#C8A077] text-2xl font-bold pl-8'>Basics to Brewing <br /> Cafe Quality <br /> Coffee At Home</h2>
                        <h4 className='text-lg font-medium pb-5 pl-8 text-[#C8A077]'>SUPER USER - 17 AUGUST 2020</h4>
                    </div>
                    <div className='bg-white space-y-3'>
                        <img className='w-full h-[400px]' src={blog2} alt="" />
                        <h2 className='hover:text-[#C8A077] text-2xl font-bold pl-8'>How Much <br /> Caffeine is in a <br /> Coffee Bean</h2>
                        <h4 className='text-lg font-medium pb-5 pl-8 text-[#C8A077]'>SUPER USER - 17 AUGUST 2020</h4>
                    </div>
                    <div className='bg-white space-y-3'>
                        <img className='w-full h-[400px]' src={blog3} alt="" />
                        <h2 className='hover:text-[#C8A077] text-2xl font-bold pl-8'>Coffee Brewing <br /> Methods & Their <br /> Differences</h2>
                        <h4 className='text-lg font-medium pb-5 pl-8 text-[#C8A077]'>SUPER USER - 17 AUGUST 2020</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;