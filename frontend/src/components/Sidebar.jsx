import Logo from "./Logo";
import AsideLink from "./AsideLink";
import { currentUser, logOut } from "../functionality/auth.ts";
import { useEffect } from "react";
import Button from "./Button.jsx";

const Sidebar = () => {

    useEffect( () => {
        const user = currentUser();
        console.log(user);
    }, []);

    return (

        <aside className="sidebar">

            <Logo size="w-11" _static={true} title={true} />

            <Button options={{
                classes: "smallButton mb-4",
                title: "Switch project",
                leftIcon: "sort"
            }} />

            <AsideLink title="Overview" icon="home" />
            <AsideLink title="Services" icon="cubes" />

            <div className="text-green-500">
                <AsideLink title="Upgrade plan" icon="crown" />
            </div>

            <AsideLink title="API keys" icon="lock" />
            <AsideLink title="Usage" icon="chart-simple" />
            <AsideLink title="Settings" icon="gear" />

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

export default Sidebar;