const Logo = ({ title, _static, size }) => {

    return (
        <a href="/" className="flex items-center gap-2 mb-3.5 mt-1 transition-all duration-500 group">
            <img src="/assets/koxy-white.png" className={`${size !== undefined ? size : "w-12"} object-cover`} />
            {_static === true
                ? <></>
                : <div className="tooltipLeft left-20">Koxy AI</div>
            }
            {title === true
                ? <div id="logoText">Koxy AI</div>
                : <></>
            }
        </a>
    )

}

export default Logo;