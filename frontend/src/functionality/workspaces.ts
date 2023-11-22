import { Query, ID, Models } from "appwrite";
import { appwriteDatabases } from "./appwrite/setup.ts";
import { currentUser } from "./auth/auth.ts";
import { closeWaiting, openWaiting } from "../components/Waiting";
import { v4 } from "uuid";
import generateId from "./generateId.ts";
import { openAlert } from "../components/Alert";
import required from "./required.ts";

// List logged in user workspaces
export const getUserWorkspaces = async (): Promise<Models.DocumentList<Models.Document> | undefined> => {

    const userId = currentUser()?.uid as string;

    required([
        {
            key: "userId",
            value: userId,
            type: "string",
            size: 28
        }
    ])

    try {
        const data = await appwriteDatabases.listDocuments(
            process.env.REACT_APP_APPWRITE_DB as string,
            process.env.REACT_APP_WORKSPACES_COLLECTION as string,
            [
                Query.equal('ownerid', userId)
            ]
        )

        return data;

    } catch (err) {
        openAlert(err.message);
        return undefined;
    }

}

// Create new workspace
export const createWorkspace = async (name: string) => {

    openWaiting();
    const userId = currentUser()?.uid;

    const check = required([
        {
            key: "Workspace name",
            value: name,
            type: "string"
        },
        {
            key: "userId",
            value: userId,
            type: "string",
            size: 28
        }
    ]);

    if (!check.ok) {
        return undefined;
    }

    const currentWorkspaces = await getUserWorkspaces();

    if (!currentWorkspaces) { return undefined };

    if (currentWorkspaces.total >= 2) {
        openAlert("You can't create more than 2 workspaces");
        closeWaiting();
        return undefined;
    }

    appwriteDatabases.createDocument(
        process.env.REACT_APP_APPWRITE_DB as string,
        process.env.REACT_APP_WORKSPACES_COLLECTION as string,
        ID.unique(),
        {
            name,
            id: v4(),
            ownerid: userId,
            token: generateId(32),
            role: "owner"
        }
    ).then(() => {
        closeWaiting();
        openAlert(`Created workspace: ${name}`);
        window.location.href = "/";
    }).catch((err) => {
        closeWaiting();
        openAlert(`Error: ${err.message}`);
    })

}

export const getWorkspace = async (workspaceId: string): Promise<Models.Document | undefined> => {

    const check = required([
        {
            key: "workspace ID",
            value: workspaceId,
            type: "string",
            size: 36
        }
    ]);

    if (!check.ok) { return undefined };

    const data = await getUserWorkspaces();

    if (!data) { return undefined };

    const docs = data.documents;
    let docData;

    docs.map(doc => {
        if (doc.id === workspaceId) {
            docData = doc;
        }
    })

    if (docData) {
        return docData;
    }

    return undefined;

}
