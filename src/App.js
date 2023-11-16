import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import ConfirmEmail from "./pages/confirmEmail";
import RequireUser from "./functionality/requireUser";

const h = () => {
    return (
        <h1>Hello</h1>
    )
}

const App = () => {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="signup" element={<Signup />} />
                <Route path="/" element={<RequireUser Component={Sidebar} />} />
            </Routes>

        </BrowserRouter>

    )

}

export default App;