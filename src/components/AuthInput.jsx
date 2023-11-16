import InputIcon from "./InputIcon";

const AuthInput = ({ id, type, placeholder, icon }) => {

    return (
        <div className="relative">
            <InputIcon name={icon} />
            <input id={id} className="authInput" type={type} placeholder={placeholder} />
        </div>
    )

}

export default AuthInput;