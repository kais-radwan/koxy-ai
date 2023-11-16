import Icon from "./Icon"

const CheckRow = ({ info }) => {

    return (
        <div className="flex items-center gap-1 text-sm">
            <Icon name="done" />
            <p>{info}</p>
        </div>
    )

}

export default CheckRow;