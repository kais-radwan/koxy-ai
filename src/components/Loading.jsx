
const Loading = ({ info }) => {

    return (
        <div className="flex flex-col items-center justify-center gap-6 transition-all">
            <div className="p-4 border-1 border-green-500 w-10 h-10 rounded-md animate-spin"></div>
            <p id="loadingInfo" className="text-sm text-gray-300">{info}</p>
        </div>
    )

}

export const LoadingPage = ({ info }) => {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#161616] flex items-center justify-center">
            <Loading info={info} />
        </div>
    )

}

export const updateLoadingInfo = (info) => {

    const infoElm = document.getElementById("loadingInfo");

    if (!infoElm) { return undefined };

    infoElm.innerText = info;

}

export default Loading;