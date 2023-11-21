import InputIcon from "../icons/InputIcon";

const AuthInput = ({ id, type, placeholder, icon, defaultValue }) => {

    return (
        <div className="relative group">
            <InputIcon name={icon} />
            <input id={id} className="authInput" type={type} placeholder={placeholder} defaultValue={defaultValue} />
        </div>
    )

}

export default AuthInput;