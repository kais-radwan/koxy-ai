
export const closeAlert = () => {
    document.getElementById("alertContainer").classList.add("translate-x-[120%]");
}

const Alert = () => {

    return (
        <div id="alertContainer" className="fixed top-4 right-4 text-sm min-w-[20rem] backdrop-blur-xl p-3 pl-4 pr-4 border-1 border-[#51515151] rounded-md bg-[#1f1f1f]/70 translate-x-[120%] transition-all duration-500 z-30">
            <p className="min-w-max mb-4" id="alertInfo"></p>
            <div className="w-full flex items-cetner">
                <button onClick={() => {closeAlert()}} className="smallButton">Okay got it</button>
            </div>
        </div>
    )

}

export const openAlert = (info) => {
    document.getElementById("alertInfo").innerText = info;
    document.getElementById("alertContainer").classList.remove("translate-x-[120%]");
    setTimeout( () => {
        closeAlert();
    }, 3000);
}

export default Alert;