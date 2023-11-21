import Icon from "../icons/Icon";

const Button = ({ options }) => {

    return (
        <button 
            className={options.classes || ""}
            id={options.id || `button_${Date.now()}`}
            onClick={options.onClick || function () {}}
        >
            {options.leftIcon !== undefined ? <Icon name={options.leftIcon} /> : <></>}
            {options.img !== undefined ? <img className="w-6" src={options.img} /> : <></>}
            {options.title}
            {options.rightIcon !== undefined ? <Icon name={options.rightIcon} /> : <></>}
        </button>
    )

}

export default Button;