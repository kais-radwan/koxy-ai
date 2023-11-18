
const Icon = ({ name, styles }) => {
    return (
        <i className={`fa-solid fa-${name} text-sm ${styles}`}></i>
    )
}

export default Icon;