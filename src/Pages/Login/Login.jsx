import { Helmet } from 'react-helmet';
import img from '../../assets/Images/Others/Login.jpg';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {


    // handle google login
    const handleGoogle = (e) => {
        e.preventDefault();
        console.log('clicked');
    }

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('clicked');
    }

    return (
        <div>
            <Helmet>
                <title>NyaBiss | Login</title>
            </Helmet>
            <div className="mt-10 mb-10 text-center items-center">
                <div className="lg:flex md:justify-center gap-32">
                <div className='flex flex-col justify-center' data-aos="zoom-in" data-aos-duration="2000">
                    <img className="lg:h-[70vh]" src={img} alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <div className="hero ">
                    <div className="hero-content flex-col border border-[#5AE4A8] py-3 px-5">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold shared text-[#5AE4A8]">Login</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn text-xl text-white bg-[#5AE4A8]">Login</button>
                            <p>or sign with <br />
                                <button onClick={handleGoogle} className="btn w-full text-xl text-white bg-[#5AE4A8]"><BsGoogle></BsGoogle></button>
                            </p>
                            </div>
                        </form>
                        <p>Don't have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/register'>Register</Link></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;