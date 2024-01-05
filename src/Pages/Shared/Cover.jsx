import { Link } from "react-router-dom";


const Cover = ({img, title}) => {
    return (
        <div className="hero h-[400px] lg:h-[500px]" style={{backgroundImage: `url("${img}")`}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold text-white">{title}</h1>
                    <Link className="underline font-bold text-white" to='/'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Cover;