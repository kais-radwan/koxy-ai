import Icon from "./Icon";

const InputIcon = ({ name }) => {

    return (
        <div className="absolute w-10 h-full flex items-center justify-center">
            <Icon name={name} styles="opacity-60 scale-90" />
        </div>
    )

}

export default InputIcon;