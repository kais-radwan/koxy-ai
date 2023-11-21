import Logo from "../../components/Logo.jsx";
import AsideLink from "../../components/buttons/AsideLink";
import { logOut } from "../../functionality/auth/auth.ts";
import Button from "../../components/buttons/Button.jsx";
import { useEffect } from "react";

const HomeSidebar = ({ active }) => {

    useEffect( () => {
        document.getElementById(active).classList.add('active');
    }, []);

    return (

        <aside className="sidebar">

            <Logo size="w-11" _static={true} title={true} />

            <div className="w-full mb-4"></div>

            <AsideLink id="workspaces" title="Workspaces" icon="server" to="/" />
            <AsideLink id="account" title="Your account" icon="user-astronaut" to="/account" />

            <AsideLink title="What's new" icon="newspaper" />
            <AsideLink title="Status" icon="chart-simple" />

            <div className="h-full w-full flex flex-col justify-end">
                <AsideLink title="Documentation" icon="book" />
                <AsideLink 
                    title="Log out" 
                    icon="right-from-bracket"
                    onClick={() => {
                        logOut();
                    }}
                />
            </div>

        </aside>

    )

}

export default HomeSidebar;