
export const toggleMenu = (id) => {
    
    const elm = document.getElementById(id);

    if (!elm) {
        return undefined;
    }

    const isClosed = elm.classList.contains("scale-0");

    if (isClosed) {
        elm.classList.remove("scale-0");
    } else {
        elm.classList.add("scale-0");
    }

}

const Menu = ({ children, id }) => {

    id = id || `menu_${Date.now()}`;

    return (

        <div id={id} className="absolute top-100 p-4 bg-[#181818] border-1 border-border flex flex-col gap-4 text-sm rounded-xl drop-shadow-md scale-0">

            {children}

        </div>

    )

}

export default Menu;