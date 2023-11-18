
const Waiting = () => {

    return (

        <div id="waitingContainer" className="fixed bottom-0 left-0 pb-3 w-screen flex items-center justify-center translate-y-[100%] transition-all duration-500 opacity-0">
            <div className="p-1.5 pl-3 pr-3 border-1 border-border bg-fgLight rounded-xl flex items-center gap-2 text-xs text-gray-300">
                <div className="border-1 border-green-500 w-5 h-5 rounded-md animate-spin"></div>
                <p>Please wait</p>
            </div>
        </div>

    )

}

export const openWaiting = () => {
    document.getElementById("waitingContainer").classList.remove("opacity-0", "translate-y-[100%]");
}

export const closeWaiting = () => {
    document.getElementById("waitingContainer").classList.add("opacity-0", "translate-y-[100%]");
}

export default Waiting;