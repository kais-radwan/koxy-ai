import { useEffect } from "react";
import Logo from "../../components/Logo";
import AsideLink from "../../components/buttons/AsideLink";
import Button from "../../components/buttons/Button";
import AccountMenu from "../../components/layouts/AccountMenu.jsx";

const HomeNavbar = ({ active, user }) => {

    useEffect( () => {
        document.getElementById(active).classList.add('active');
    }, []);

    return (

        <div className="navbar">

            <Logo title={true} _static={true} />

            <AsideLink id="workspaces" title="Workspaces" to="/" />
            <AsideLink id="account" title="Your account" to="/account" />
            <AsideLink id="pricing" title="Pricing" to="/account" />
            <AsideLink id="docs" title="Documentation" to="/account" />

            <div className="w-full flex items-center justify-end">
                <AccountMenu user={user} />
            </div>

        </div>

    )

}

export default HomeNavbar;