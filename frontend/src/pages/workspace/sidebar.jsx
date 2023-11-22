import Logo from "../../components/Logo";
import AsideLink from "../../components/buttons/AsideLink";
import { logOut } from "../../functionality/auth/auth.ts";
import Button from "../../ccomponents/buttons/Button";
import { useEffect } from "react";

const WorkspaceSidebar = ({ active }) => {

    useEffect( () => {
        document.getElementById(active).classList.add('active');
    }, []);

    return (

        <aside className="sidebar">

            <Logo size="w-11" _static={true} title={true} />

            <Button options={{
                classes: "smallButton mb-4",
                title: "Switch project",
                leftIcon: "sort"
            }} />

            <AsideLink id="overview" title="Overview" icon="home" />
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

export default WorkspaceSidebar;