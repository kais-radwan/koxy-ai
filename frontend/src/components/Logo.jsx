import { Link } from "react-router-dom";

const Logo = ({ title, _static, size }) => {

    return (
        <Link to="/" className="flex items-center gap-2 transition-all duration-500 group transition-all mr-4">
            <div className="group-hover:rotate-[45deg] border-1 border-white/20 flex items-center transition-all justify-center w-9 rounded-xl mr-1 group-hover:border-green-500">
                <img src="/assets/K.png" className={`${size !== undefined ? size : ""} object-cover transition-all duration-500 rotate-0 group-hover:rotate-[-45deg]`} />
            </div>
            {title === true
                ? <div className="min-w-max" id="logoText">Koxy AI</div>
                : <></>
            }
        </Link>
    )

}

export default Logo;