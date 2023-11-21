import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/layouts/Page";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import RequireUser from "./functionality/auth/requireUser";

import Home from "./pages/home/body";
import Account from "./pages/home/account";

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
                <Route path="signup" element={<Page title="Welcome to Koxy AI" Component={Signup} />} />
                <Route path="signin" element={<Page title="Koxy AI | Sign in" Component={Signin} />} />

                <Route path="/" element={
                    <RequireUser Component={Home} title="Your workspaces" />
                } />

                <Route path="/account" element={
                    <RequireUser Component={Account} title="Your account" />
                } />


            </Routes>

        </BrowserRouter>

    )

}

export default App;