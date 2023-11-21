
const Cube = ({ icon }) => {

    return (
        <div className="cube">
            <i className={`fa-solid fa-${icon} text-5xl text-green-700 cubeIcon animate-pulse`}></i>
            <div className="face back"></div>
            <div className="face front"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </div>
    )

}

export default Cube;