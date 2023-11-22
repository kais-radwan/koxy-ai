import { useEffect, useState } from "react";
import { LoadingPage } from "../../components/Loading.jsx";
import { currentUser, authUpdated } from "./auth.ts";

const RequireUser = ({ Component, title, description }) => {

    const [userData, setUser] = useState(() => {currentUser()});

    document.title = `Koxy AI | ${title || ""}`;
    document.description = description || "The Serverless AI-Powered Platform";

    useEffect( () => {
        
        const isUser = localStorage.getItem("userEmail");

        if (!isUser) {
            window.location.href = "/signup";
            return undefined;
        }
        
        authUpdated((authUser) => {
            setUser(authUser);
        });
        
    }, []);

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