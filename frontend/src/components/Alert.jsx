import Button from "./buttons/Button";

export const closeAlert = () => {
    document.getElementById("alertContainer").classList.add("translate-x-[120%]");
}

const Alert = () => {

    return (
        <div id="alertContainer" className="fixed top-4 right-4 text-sm min-w-[20rem] backdrop-blur-xl p-3 pl-4 pr-4 border-1 border-border rounded-md bg-fgLight/70 translate-x-[120%] transition-all duration-500 z-30">
            <p className="min-w-max mb-4" id="alertInfo"></p>
            <div className="w-full flex items-cetner">
                <Button options={{
                    classes: "smallButton",
                    title: "Okay got it",
                    onClick: () => {
                        closeAlert();
                    }
                }} />
            </div>
        </div>
    )

}

export const openAlert = (info) => {
    document.getElementById("alertInfo").innerText = info;
    document.getElementById("alertContainer").classList.remove("translate-x-[120%]");
    setTimeout( () => {
        closeAlert();
    }, 4000);
}

export default Alert;