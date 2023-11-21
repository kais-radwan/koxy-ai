import Icon from "./Icon";

const HeroIcon = ({ icon }) => {

    return (

        <div className="w-9 h-9 border-1 border-white/10 bg-border/30 rotate-[45deg] rounded-xl flex items-center justify-center">
            <div className="text-green-400 rotate-[-45deg]">
                <Icon name={icon} />
            </div>
        </div>

    )

}

export default HeroIcon;