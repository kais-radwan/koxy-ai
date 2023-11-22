import { useEffect, useState } from "react";
import { InnerLoading, LoadingPage, updateLoadingInfo } from "../../components/Loading";
import { getUserWorkspaces } from "../../functionality/workspaces.ts";
import HomeSidebar from "./sidebar.jsx";
import Hero from "../../components/layouts/Hero.jsx";
import Button from "../../components/buttons/Button.jsx";
import Cube from "../../components/assets/Cube.jsx";
import AuthInput from "../../components/inputs/AuthInput.jsx";
import Label from "../../components/Label.jsx";
import Modal, { openModal } from "../../components/layouts/Modal.jsx";
import { createWorkspace } from "../../functionality/workspaces.ts";
import { Link } from "react-router-dom";
import HomeNavbar from "./navbar.jsx";
import HeroIcon from "../../components/icons/HeroIcon.jsx";

let workspacesData = null;

const Home = ({ user }) => {

    const [workspaces, setWorkspaces] = useState(workspacesData);

    useEffect(() => {
        getUserWorkspaces().then((data) => {
            updateWorkspacesData(data);
        })
    }, []);

    const updateWorkspacesData = (data) => {

        if (!data) {
            updateLoadingInfo("Error: Could not get your workspaces");
            return undefined;
        }

        workspacesData = data;
        setWorkspaces(data);

    }

    const newWorkspaceButton = () => {
        return (
            <Button options={{
                classes: "primaryButton",
                title: "New workspace",
                leftIcon: "plus",
                onClick: () => {
                    openModal("newWorkspaceModal", "newWorkspaceName");
                }
            }} />
        )
    }

    return (
        <>

            <HomeNavbar active="workspaces" user={user} />

            {workspaces === null

                ? <>
                    <InnerLoading info="Loading workspaces data" />
                </>

                : <>

                    <main className="mainContainer">

                        <Hero
                            title="Your workspaces"
                            description={`${workspaces.total}/2 Workspaces`}
                            icon="server"
                            Actions={newWorkspaceButton}
                        />

                        {workspaces.total === 0
                            ? <NoWorkspaces />
                            : <Workspaces workspaces={workspaces} />
                        }

                        <Modal title="Create new workspace" id="newWorkspaceModal" >
                            <div className="modalBody">
                                <AuthInput id="newWorkspaceName" type="text" placeholder="Enter workspace name" icon="cloud" />
                            </div>
                            <div className="modalFoot">
                                <Button options={{
                                    classes: "smallButton max-w-max",
                                    title: "Create workspace",
                                    rightIcon: "chevron-right",
                                    onClick: () => {
                                        createWorkspace(document.getElementById("newWorkspaceName").value);
                                    }
                                }} />
                            </div>
                        </Modal>

                    </main>

                </>

            }

        </>
    )

}

const Workspaces = ({ workspaces }) => {

    return (
        <div className="innerContainer">
            <div className="flex items-center gap-4 w-full">
                {
                    workspaces.documents.map(doc => (<Workspace key={doc["$id"]} workspace={doc} />))
                }
            </div>
            <p className="text-sm opacity-70 flex items-center gap-2">
                Need help with anything? <a className="opacityButton max-w-max">Check the docs</a>
            </p>
        </div>
    )

}

const Workspace = ({ workspace }) => {

    const props = [
        {
            key: "Workspace ID",
            value: workspace.id
        }
    ]

    return (

        <Link to={`/workspace/${workspace.id}`} className="w-full border-1 border-border/20 bg-fgLight/70 rounded-xl flex flex-col p-4 gap-2 mb-6 transition-all duration-300 cursor-pointer hover:border-green-500">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b-1 border-border/20">
                <div className="w-full flex items-center gap-3">
                    <HeroIcon icon="server" />
                    <p className="text-sm font-bold min-w-max">{workspace?.name}</p>
                </div>
                <div className="w-full flex items-center justify-end">
                    <Label info={workspace.plan} />                    
                </div>
            </div>

            <div className="flex flex-col gap-3">

                {props.map(item => (
                    <div key={item.key} className="flex items-center gap-1">
                        <p className="text-xs">{item.key}:</p>
                        <p className="text-xs opacity-70">{item.value}</p>
                    </div>
                ))}

            </div>

        </Link>

    )

}

const NoWorkspaces = () => {

    return (

        <div className="innerContainer">
            <div className="infoContainer">

                <div className="innerInfoContainer p-2">
                    <Label type="success" info="Getting started" />
                    <h3 className="innerTitle">Create your first workspace</h3>
                    <p className="text-sm opacity-70">
                        Workspaces function as meticulously curated containers, meticulously designed to house and orchestrate your suite of serverless, AI-powered services. These environments provide a sophisticated framework for seamless deployment, efficient management, and optimal performance of your cutting-edge services, ensuring a tailored and streamlined experience for your projects.
                    </p>

                    <Button options={{
                        classes: "primaryButton max-w-max",
                        title: "Create workspace",
                        onClick: () => {
                            openModal("newWorkspaceModal", "newWorkspaceName");
                        }
                    }} />
                </div>

                <div className="innerInfoContainer innerRight max-w-[40%] pl-10 pr-10 items-center">
                    <Cube icon="server" />
                </div>

            </div>
        </div>

    )

}

export default Home;