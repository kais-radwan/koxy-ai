import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import RequireUser from "./functionality/requireUser";
import { LoadingPage } from "./components/Loading";
import { getWorkspace } from "./functionality/workspaces.ts";
import { useEffect } from "react";

const h = () => {

    useEffect( () => {
        getWorkspace().then( (data) => {
            console.log(data);
        })
    }, []);

    return (
        <LoadingPage info="Getting project info" />
    )

}

const App = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Authentication routes */}
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />

                <Route path="/" element={<RequireUser Component={h} />} />

            </Routes>

        </BrowserRouter>

    )

}

export default App;