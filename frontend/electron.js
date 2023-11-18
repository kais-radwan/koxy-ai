const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow () {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL('localhost:3000');

    mainWindow.on("closed", () => {
        const closed = closeApp();
    })

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    closeApp();
})

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
})

const closeApp = () => {
    if (process.platform === "darwin") {
        return undefined;
    }
    app.quit();
    mainWindow = null;
}