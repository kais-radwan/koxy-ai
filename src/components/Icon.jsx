
const Icon = ({ name, styles }) => {
    return (
        <span className={`material-symbols-rounded ${styles}`}>
            {name}
        </span>
    )
}

export default Icon;