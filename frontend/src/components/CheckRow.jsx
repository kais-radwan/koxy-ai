import Icon from "./Icon"

const CheckRow = ({ info }) => {

    return (
        <div className="flex items-center gap-2 mb-2 text-sm">
            <Icon name="circle-check" />
            <p>{info}</p>
        </div>
    )

}

export default CheckRow;