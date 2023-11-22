import Icon from "../icons/Icon"
import { Link } from "react-router-dom";

const AsideLink = ({ title, icon, onClick, id, to }) => {

    return (
        <Link id={id || String(Date.now())} to={to} onClick={onClick || function () {}} className="asideLink group relative transition-all duration-300">
            <div className="">{title}</div>
        </Link>
    )

}

export default AsideLink;