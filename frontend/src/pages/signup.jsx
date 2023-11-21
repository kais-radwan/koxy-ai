import { useEffect } from "react";
import Label from "../components/Label";
import Logo from "../components/Logo";
import CheckRow from "../components/layouts/CheckRow";
import { createUser } from "../functionality/auth/auth.ts";
import { openAlert } from "../components/Alert.jsx";
import AuthInput from "../components/inputs/AuthInput.jsx";
import Button from "../components/buttons/Button.jsx";
import LinkButton from "../components/buttons/Link.jsx";
import authEvents from "../functionality/auth/authEvents.ts";

const Signup = () => {

    const info = [
        "Power your application with AI models in clicks",
        "Build your back-end services using AI without one line of code",
        "Serve your back-end edge-close to your users",
        "Authentication and real-time out-of-the-box",
        "and a lot more waiting for you..."
    ];

    const signup = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        if (!email || !password) {
            openAlert("Please enter your email and password");
            return undefined;
        }
        createUser({
            type: "password",
            email,
            password
        })
    }

    useEffect( () => {
        authEvents.on("authChange", (user) => {
            if (user) {
                window.location.href = "/";
            }
        })
    }, [])

    return (

        <main className="authContainer">

            <div className="min-w-[50%] h-full p-6 relative overflow-hidden rounded-xl bg-fgLight">
            
                <div className="absolute w-full h-full top-0 left-0 p-6 z-10 flex flex-col gap-4">
                    
                    <Logo title={true} _static={true} />
                    <p className="mb-2">It's time to change, it's time for efficiency, it's time for Koxy AI</p>
                    
                    {info.map(item => (
                        <CheckRow key={item} info={item} />
                    ))}

                </div>
            
                <div className="greenRadialGradient w-full h-full absolute top-0 left-0"></div>

            </div>

            <div className="p-12 pt-10 flex flex-col gap-4 w-full max-h-screen overflow-y-auto">
                
                <Label
                    type="success"
                    info="Limited access"
                />

                <h1 className="text-3xl font-bold">Welcome to Koxy AI</h1>
                <p className="opacity-70 ">Let's create your free account and get you started</p>

                <Button options={{
                    classes: "whiteButton mt-3 mb-2",
                    onClick: () => {createUser({ type: "google" })},
                    img: "/assets/google.webp",
                    title: "Continue with Google"
                }} />

                <div className="flex items-center justify-center w-full">
                    <p className="opacity-70">or continue with email</p>
                </div>

                <AuthInput
                    icon="envelope"
                    type="email"
                    id="email"
                    placeholder="Email address"
                />
                
                <AuthInput
                    icon="key"
                    type="password" 
                    id="password"
                    placeholder="Password" 
                />

                <Button options={{
                    classes: "hoverButton my-0.5",
                    rightIcon: "circle-right",
                    title: "Create your account",
                    onClick: () => {
                        signup();
                    }
                }} />

                <LinkButton options={{
                    to: "/signin",
                    classes: "opacityButton",
                    title: "Sign in to your account"
                }} />

            </div>

        </main>

    )

}

export default Signup;