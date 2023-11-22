import { useState } from "react";
import LinkButton from "../buttons/Link";
import Button from "../buttons/Button";
import { logOut } from "../../functionality/auth/auth.ts";

const AccountMenu = ({ user }) => {

    const photo = `https://api.dicebear.com/7.x/initials/svg?&seed=${user.email || user.displayName}&backgroundColor=22c55e`;
    
    const [state, setState] = useState(false);

    const toggleMenu = () => {
        if (state === true) {
            document.getElementById("accountMenu").classList.add("translate-y-[-100px]", "scale-0");
            setState(false);
        } else {
            document.getElementById("accountMenu").classList.remove("scale-0", "translate-y-[-100px]");
            setState(true);
        }
    }

    return (

        <div className="relative z-40">

            <img onClick={toggleMenu} src={photo} className="w-8 rounded-[99rem] border-1 border-transparent hover:border-green-300 transition-all cursor-pointer" />

            <div id="accountMenu" className="fixed top-14 right-10 p-4 bg-[#181818] border-1 border-border flex flex-col gap-4 text-sm rounded-xl drop-shadow-md translate-y-[-100px] scale-0 transition-all duration-200 z-50">
                <p className="text-xs opacity-70">{user.email}</p>
                <LinkButton options={{
                    to: "/account",
                    classes: "asideLink",
                    title: "Account settings",
                    leftIcon: "gear"
                }} />
                <div className="w-full border-t-1 border-border"></div>
                <LinkButton options={{
                    to: "/",
                    classes: "asideLink",
                    title: "Koxy Homepage",
                    leftIcon: "up-right-from-square"
                }} />
                <LinkButton options={{
                    to: "/",
                    classes: "asideLink",
                    title: "Koxy Status",
                    leftIcon: "chart-simple"
                }} />
                <div className="w-full border-t-1 border-border"></div>
                <Button options={{
                    to: "/",
                    classes: "asideLink",
                    title: "Sign out",
                    leftIcon: "right-from-bracket",
                    onClick: () => {
                        logOut();
                    }
                }} />
            </div>
        </div>

    )

}

export default AccountMenu;
