import { Client, Databases } from "appwrite";

// setup the appwrite client
export const appwriteClient = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.REACT_APP_APPWRITE_ID as string)
;

// setup the database
export const appwriteDatabases = new Databases(appwriteClient);
