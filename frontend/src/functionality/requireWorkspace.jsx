import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWorkspace } from "./workspaces.ts";
import WorkspaceNavbar from "../pages/workspace/navbar.jsx";
import { InnerLoading } from "../components/Loading";

let savedWorkspaces = [];

const RequireWorkspace = ({ Component, active, user, title }) => {

    const { id } = useParams();
    const [workspace, setWorkspace] = useState();

    useEffect( () => {
        
        if (!id) {
            window.location.href = "/";
            return undefined;
        }

        if (savedWorkspaces[id]) {
            setWorkspace(savedWorkspaces[id]);
            document.title = `Koxy AI | ${savedWorkspaces[id]?.name} ${title}`;
            return undefined;
        }

        getWorkspace(id).then( (data) => {
            console.log(data);
            if (!data) {
                window.location.href = "/";
            }
            else {
                savedWorkspaces[id] = data;
                setWorkspace(data);
                document.title = `Koxy AI | ${data?.name} ${title}`;
            }
        })

    }, []);

    return (

        <>
            <WorkspaceNavbar id={id} active={active} user={user} />

            {typeof workspace !== "object"
                ? <InnerLoading info="Loading workspace data" />
                : <Component id={id} workspace={workspace} user={user} />
            }

        </>

    )

}

export default RequireWorkspace;