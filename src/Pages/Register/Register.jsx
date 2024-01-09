import { Helmet } from 'react-helmet';
import img from '../../assets/Images/Others/Register.jpg'
import { Link } from 'react-router-dom';

const Register = () => {


    // handle register
    const handleRegister = (e) => {
        e.preventDefault();
        console.log('clicked');
    }

    return (
        <div>
            <Helmet>
                <title>NyaBiss | Register</title>
            </Helmet>
            <div className="w-11/12 mx-auto mb-10 text-center items-center">
                <div className="lg:flex justify-center items-center gap-14">
                    <div className='flex flex-col justify-center' data-aos="zoom-in" data-aos-duration="2000">
                        <img className="" src={img} alt="" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000">
                    <div className="hero ">
                        <div className="hero-content flex-col border border-[#31CBAF]  py-3 px-5">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl shared font-bold text-[#31CBAF]">Register</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm ">
                            <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Name</span>
                                </label>
                                <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                type="text"
                                name="photo"
                                placeholder="url"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Email</span>
                                </label>
                                <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Password</span>
                                </label>
                                <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-xl text-white bg-[#31CBAF]" data-aos="zoom-in" data-aos-duration="2000">Register</button>
                                
                            </div>
                            </form>
                            <p>Have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/login'>Login</Link></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;