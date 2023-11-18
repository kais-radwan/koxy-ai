import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import RequireUser from "./functionality/requireUser";
import { LoadingPage, updateLoadingInfo } from "./components/Loading";

const h = () => {

    setTimeout( () => {
        updateLoadingInfo("Connecting to project")
    }, 2000);

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