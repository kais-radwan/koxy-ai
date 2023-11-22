import Label from "../Label";

const OptionButton = ({ title, icon, description, action, label }) => {

    return (

        <button onClick={action || function () {}} className="optionButton">
            <div className="w-9 h-9 p-1 flex items-center justify-center border-1 border-border rounded-xl">
                <img src={icon} />
            </div>
            <div className="w-[70%] flex flex-col gap-2">
                <p className="text-start text-sm flex items-center gap-2">
                    {title}
                    {label !== undefined ? <Label type={label?.type} info={label?.info} /> : <></>}
                </p>
                <p className="text-sm opacity-70 text-start">
                    {description}
                </p>
            </div>
        </button>

    )

}

export default OptionButton;