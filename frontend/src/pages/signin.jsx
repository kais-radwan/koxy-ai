import { useEffect } from "react";
import Logo from "../components/Logo";
import CheckRow from "../components/CheckRow";
import { signinUser } from "../functionality/auth.ts";
import { openAlert } from "../components/Alert.jsx";
import AuthInput from "../components/AuthInput.jsx";
import Button from "../components/Button.jsx";
import LinkButton from "../components/Link.jsx";
import authEvents from "../functionality/authEvents.ts";

const Signin = () => {

    const info = [
        "Power your application with AI models in clicks",
        "Build your back-end services using AI without one line of code",
        "Serve your back-end edge-close to your users",
        "Authentication and real-time out-of-the-box",
        "and a lot more waiting for you..."
    ];

    const signin = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        if (!email || !password) {
            openAlert("Please enter your email and password");
            return undefined;
        }
        signinUser({
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

                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="opacity-70 ">We are happy to see you here again :)</p>

                <Button options={{
                    classes: "whiteButton mt-3 mb-2",
                    onClick: () => {signinUser({ type: "google" })},
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
                    title: "Sign in to your account",
                    onClick: () => {
                        signin();
                    }
                }} />

                <LinkButton options={{
                    to: "/signup",
                    classes: "opacityButton",
                    title: "Create new account"
                }} />
            
            </div>

        </main>

    )

}

export default Signin;