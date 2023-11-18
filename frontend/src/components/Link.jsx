import { Link } from "react-router-dom";
import Icon from "./Icon";

const LinkButton = ({ options }) => {

    return (
        <Link 
            className={options.classes || ""}
            id={options.id || `button_${Date.now()}`}
            to={options.to}
        >
            {options.leftIcon !== undefined ? <Icon name={options.leftIcon} /> : <></>}
            {options.img !== undefined ? <img className="w-6" src={options.img} /> : <></>}
            {options.title}
            {options.rightIcon !== undefined ? <Icon name={options.rightIcon} /> : <></>}
        </Link>
    )

}

export default LinkButton;