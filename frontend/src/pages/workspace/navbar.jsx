import { useEffect } from "react";
import Logo from "../../components/Logo";
import AsideLink from "../../components/buttons/AsideLink";
import Button from "../../components/buttons/Button";
import { logOut } from "../../functionality/auth/auth.ts";
import AccountMenu from "../../components/layouts/AccountMenu.jsx";
import Menu, { toggleMenu } from "../../components/layouts/Menu.jsx";
import Label from "../../components/Label.jsx";

const WorkspaceNavbar = ({ id, active, user }) => {

    useEffect(() => {
        const elm = document.getElementById(active);
        if (elm) {
            elm.classList.add('active');
        }
    }, []);

    return (

        <div className="navbar">

            <Logo title={true} _static={true} />

            <AsideLink id="sandboxes" title="Sandboxes" to={`/workspace/${id}`} />
            <AsideLink id="ai" title="Models" to="/account" />
            <AsideLink id="docs" title="Databases" to="/account" />

            <div className="relative">

                <Button options={{
                    classes: "asideLink",
                    title: "More",
                    rightIcon: "chevron-down",
                    onClick: () => {
                        toggleMenu("moreItemsMenu");
                    }
                }} />

                <Menu id="moreItemsMenu">
                    <AsideLink
                        id="domains"
                        title="Real-time"
                    />

                    <AsideLink
                        id="domains"
                        title="Domains"
                    />

                    <AsideLink
                        id="domains"
                        title="Usage"
                    />
                </Menu>

            </div>

            <div className="w-full flex items-center justify-end gap-6">
                <Button options={{
                    classes: "smallButton",
                    title: "Docs",
                    leftIcon: "book",
                    onClick: () => {
                        logOut();
                    }
                }} />

                <AccountMenu user={user} />

            </div>

        </div>

    )

}

export default WorkspaceNavbar;