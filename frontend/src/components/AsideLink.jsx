import Icon from "./Icon"

const AsideLink = ({ title, icon, onClick }) => {

    return (
        <a onClick={onClick || function () {}} className="asideLink group relative transition-all duration-300">
            <Icon name={icon} />
            <div className="">{title}</div>
        </a>
    )

}

export default AsideLink;