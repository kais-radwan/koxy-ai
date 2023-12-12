import Icon from "./Icon";

const HeroIcon = ({ icon }) => {

    return (

        <div 
            style={{
                background: "linear-gradient(130deg, rgba(255, 255, 255, .15) 0%, transparent 80%)"
            }}
            className="w-9 h-9 border-1 border-white/20 rounded-xl flex items-center justify-center"
        >
            <div className="">
                <Icon name={icon} />
            </div>
        </div>

    )

}

export default HeroIcon;