const Logo = ({ title, _static }) => {

    return (
        <a href="/" className={`flex items-center gap-2 mb-4 mt-1 transition-all duration-500 group ${_static === true ? "" : "hover:rotate-[-10deg]"}`}>
            <img src="/assets/koxy-white.png" className="w-12 object-cover" />
            {_static === true
                ? <></>
                : <div className="tooltipLeft">Koxy AI</div>
            }
            {title === true
                ? <div id="logoText">Koxy AI</div>
                : <></>
            }
        </a>
    )

}

export default Logo;