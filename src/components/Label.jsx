const Label = ({ type, info }) => {

    let color;

    if (type === "success") {
        color = "green-500";
    }
    else if (type === "error") {
        color = "red-500";
    }
    else {
        color = "white";
    }

    return (

        <div className={`label text-${color}`}>{info}</div>

    )

}

export default Label;