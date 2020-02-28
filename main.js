// Modules to control application life and create native browser window
const { app, BrowserWindow, Notification, Tray, Menu } = require("electron");
const path = require("path");
const icon = path.join(__dirname, "./icon.png");

app.setAppUserModelId("com.myapp.id");

let tray;

const tryMenu = Menu.buildFromTemplate([
  { label: "Reload", role: "reload" },
  { label: "Toggle dev tools", role: "toggleDevTools" }
]);

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  tray = new Tray(icon);
  tray.setContextMenu(tryMenu);

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  new Notification({ title: "hi there!", timeoutType: "never" }).show();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
