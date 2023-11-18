import { useState } from "react";
import { LoadingPage } from "../components/Loading";
import authEvents from "./authEvents.ts";
import { currentUser } from "./auth.ts";

const RequireUser = ({ Component }) => {

    const [allowed, setAllowed] = useState(() => {currentUser()});

    const isUser = localStorage.getItem("userEmail");
    
    if (!isUser) {
        window.location.href = "/signup";
        return undefined;
    }

    authEvents.on("authChange", (user) => {

        if (!user) {
            setAllowed(false);
            window.location.href = "/signup";
            return undefined;
        }

        setAllowed(true);

    })

    return (
        <>
            {allowed === true ? <Component /> : <LoadingPage info="Loading Koxy AI" />}
        </>
    )

}

export default RequireUser;