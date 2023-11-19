import Logo from "../../components/Logo.jsx";
import AsideLink from "../../components/AsideLink";
import { logOut } from "../../functionality/auth.ts";
import Button from "../../components/Button.jsx";

const HomeSidebar = () => {

    return (

        <aside className="sidebar">

            <Logo size="w-11" _static={true} title={true} />

            <Button options={{
                classes: "smallButton mb-4",
                title: "New workspace",
                leftIcon: "plus"
            }} />

            <AsideLink title="Workspaces" icon="server" />
            <AsideLink title="Your account" icon="user-astronaut" />

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