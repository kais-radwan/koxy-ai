import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import RequireUser from "./functionality/requireUser";
import Home from "./pages/home/body";

const h = () => {

    return (
        <h1>Hello</h1>
    )

}

const App = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Authentication routes */}
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />

                <Route path="/" element={<RequireUser Component={Home} />} />

            </Routes>

        </BrowserRouter>

    )

}

export default App;