import Icon from "./Icon"

const AsideLink = ({ title, icon }) => {

    return (
        <a className="asideLink group relative transition-all duration-300">
            <div className="text-xs">
                <Icon name={icon} />
            </div>
            <div className="tooltipLeft group-hover:rotate-[-10deg]">{title}</div>
        </a>
    )

}

export default AsideLink;