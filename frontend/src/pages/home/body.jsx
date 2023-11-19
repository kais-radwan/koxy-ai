import { useEffect, useState } from "react";
import { LoadingPage, updateLoadingInfo } from "../../components/Loading";
import { getUserWorkspaces } from "../../functionality/workspaces.ts";
import HomeSidebar from "./sidebar.jsx";
import Hero from "../../components/Hero.jsx";
import Button from "../../components/Button.jsx";
import HeroIcon from "../../components/HeroIcon.jsx";

const Home = ({ user }) => {

    const [ workspaces, setWorkspaces ] = useState(null);

    useEffect( () => {
        getUserWorkspaces().then( (data) => {
            updateWorkspacesData(data);
        })
    }, []);

    const updateWorkspacesData = (data) => {

        if (!data) {
            updateLoadingInfo("Error: Could not get your workspaces");
            return undefined;
        }

        setWorkspaces(data);

    }

    return (
        <>
        
            {workspaces === null
                
                ? <LoadingPage info="Loading your workspaces" />

                : <>
                    <HomeSidebar />

                    <main className="mainContainer">

                        <Hero
                            title="Your workspaces"
                            description={`${workspaces.total} Workspaces`}
                            icon="server"
                            Actions={() => {
                                return (
                                    <Button options={{
                                        classes: "hoverButton",
                                        title: "Create new workspace",
                                        leftIcon: "plus"
                                    }} />
                                )
                            }}
                        />

                        <div className="innerContainer">
                            <div className="infoContainer">
                                
                                <HeroIcon icon="server" />
                                <h3>Create your first workspace</h3>
                                
                                <div className="relative group">
                                    <div className="absolute top-[-.2rem] right-[-.2rem] group-hover:hidden">
                                        <div className="absolute w-3 h-3 bg-green-500/50 rounded-[99rem] animate-ping"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-[99rem]"></div>
                                    </div>
                                    <Button options={{
                                        classes: "smallButton",
                                        title: "Create workspace"
                                    }} />
                                </div>

                            </div>
                        </div>

                    </main>

                </>
            
            }

        </>
    )

}

export default Home;