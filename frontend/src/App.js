import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/layouts/Page";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import RequireUser from "./functionality/auth/requireUser";

// Home
import Home from "./pages/home/body";
import Account from "./pages/home/account";

// Workspace
import WorkspaceOverview from "./pages/workspace/overview";

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

                <Route
                    path="/workspace/:id"
                    element={<RequireUser Component={WorkspaceOverview} title="Workspace" />}
                />


            </Routes>

        </BrowserRouter>

    )

}

export default App;