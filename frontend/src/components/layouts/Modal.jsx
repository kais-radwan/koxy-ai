import Button from "../buttons/Button";

export const closeModal = (id) => {

    const modal = document.querySelector(`#${id}`);

    if (!modal) {
        return undefined;
    }

    modal.classList.add("hidden");

}

export const openModal = (id, focus) => {

    const modal = document.querySelector(`#${id}`);

    if (!modal) {
        return undefined;
    }

    modal.classList.remove("hidden");

    if (!focus){
        return undefined;
    }

    const elm = document.getElementById(focus);

    if (elm) {
        elm.focus();
    }

}

const Modal = ({ children, title, id }) => {

    id = id || `modal_${Date.now()}`;

    return (

        <div id={id} className="overlay flex items-center justify-center hidden">
            <div className="modal">
                <div className="modalHead">
                    <h3 className="min-w-max">{title}</h3>
                    <div className="flex w-full items-center justify-end">
                        <Button options={{
                            classes: "smallButton",
                            leftIcon: "close",
                            onClick: () => {
                                closeModal(id);
                            }
                        }} />
                    </div>
                </div>
                {children}
            </div>
        </div>

    )

}

export default Modal;