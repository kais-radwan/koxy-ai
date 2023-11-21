import { useState } from "react";
import { LoadingPage } from "../../components/Loading.jsx";
import authEvents from "./authEvents.ts";
import { currentUser } from "./auth.ts";

const RequireUser = ({ Component, title, description }) => {

    const [userData, setUser] = useState(() => {currentUser()});

    const isUser = localStorage.getItem("userEmail");
    
    if (!isUser) {
        window.location.href = "/signup";
        return undefined;
    }

    document.title = `Koxy AI | ${title || ""}`;
    document.description = description || "The Serverless AI-Powered Platform";

    authEvents.on("authChange", (user) => {

        if (!user) {
            setUser(false);
            window.location.href = "/signup";
            return undefined;
        }

        setUser(user);

    })

    return (
        <>
            {typeof userData === 'object'
                ? <Component user={userData} />
                : <LoadingPage info="Loading Koxy AI" />
                }
        </>
    )

}

export default RequireUser;