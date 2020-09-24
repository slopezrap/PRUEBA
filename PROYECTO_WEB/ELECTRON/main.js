const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(
    url.format({
      pathname: "C:/Users/slope/OneDrive/Escritorio/EY/ANGULAR-ELECTRON-DJANGO/PROYECTO_WEB/FRONT/WS-ANGULAR/dist/APP-PRUEBA/index.html",
      protocol: "file:",
      slashes: true
    })
  );
  //mainWindow.loadFile("C:/Users/slope/OneDrive/Escritorio/EY/ANGULAR-ELECTRON-DJANGO/PROYECTO_WEB/FRONT/WS-ANGULAR/dist/APP-PRUEBA/index.html");
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})