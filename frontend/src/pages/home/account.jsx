import HomeSidebar from "./sidebar";
import Hero from "../../components/layouts/Hero";
import Icon from "../../components/icons/Icon";
import AuthInput from "../../components/inputs/AuthInput";
import Button from "../../components/buttons/Button";

import { updateDisplayName, changePassword } from "../../functionality/auth/auth.ts";

const Account = ({ user }) => {

    console.log(user);

    return (

        <>

            <HomeSidebar active="account" />

            <main className="mainContainer">

                <Hero
                    title={
                        <p className="flex items-center gap-2">
                            {user.displayName || user.email.split("@")[0]}
                            {user.emailVerified === true
                                ? <span className="text-green-500"><Icon name="circle-check" /></span>
                                : <></>
                            }
                        </p>
                    }
                    description={user.email}
                    icon="user-astronaut"
                />

                <div className="innerContainer">
                
                    <div className="infoContainer">

                        <div className="innerInfoContainer">
                            <p className="">
                                Display name
                            </p>
                            <p className="text-sm opacity-70">
                                Don't use more than 32 characters
                            </p>
                        </div>

                        <div className="innerInfoContainer">
                            <AuthInput id="displayName" type="text" placeholder="Enter your display name" defaultValue={user.displayName} icon="user" />
                            <Button options={{
                                classes: "primaryButton max-w-max",
                                title: "Save changes",
                                onClick: () => {
                                    const name = document.getElementById("displayName").value;
                                    updateDisplayName(name);
                                }
                            }} />
                        </div>

                    </div>

                    <div className="infoContainer">

                        <div className="innerInfoContainer">
                            <p className="">
                                Change password
                            </p>
                            <p className="text-sm opacity-70">
                                Set a new password for your account
                            </p>
                        </div>

                        <div className="innerInfoContainer">
                            <AuthInput id="passwd" type="password" placeholder="Enter your new password" icon="key" />
                            <Button options={{
                                classes: "primaryButton max-w-max",
                                title: "Update password",
                                onClick: () => {
                                    const passwd = document.getElementById("passwd").value;
                                    changePassword(passwd);
                                }
                            }} />
                        </div>

                    </div>

                </div>

            </main>

        </>

    )

}

export default Account;