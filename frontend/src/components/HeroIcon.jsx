import Icon from "./Icon";

const HeroIcon = ({ icon }) => {

    return (

        <div className="w-8 h-8 border-1 border-green-400 bg-green-500/10 rounded-md rotate-45 flex items-center justify-center">
            <div className="rotate-[-45deg] text-green-400">
                <Icon name={icon} />
            </div>
        </div>

    )

}

export default HeroIcon;