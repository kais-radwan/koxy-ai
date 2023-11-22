import Logo from "../Logo";
import AsideLink from "../buttons/AsideLink";
import { logOut } from "../../functionality/auth/auth.ts";
import { useEffect } from "react";

const WorkspaceSidebar = ({ active }) => {

    useEffect( () => {
        document.getElementById(active).classList.add('active');
    }, []);

    return (

        <aside className="sidebar">

            <Logo size="w-11" _static={true} title={true} />

            <div className="w-full mb-4"></div>

            <AsideLink id="overview" title="Overview" icon="home" />
            <AsideLink title="Services" icon="cubes" />

            <AsideLink title="Upgrade plan" icon="crown" />

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

export default WorkspaceSidebar;