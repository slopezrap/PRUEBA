const electron = require('electron')
    // Module to control application life.
const app = electron.app
    // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {

    const path2 = "C:/Users/slope/OneDrive/Escritorio/EY/ANGULAR-ELECTRON-DJANGO/PROYECTO_WEB/BACK/WS_DJANGO/dist/WS_DJANGO/"
    console.log(path2)
	  var subpy = require('child_process').spawn(path2+'WS_DJANGO.exe', ['runserver', 'localhost:8000']);
    var mainAddr = 'http://localhost:8000';
    var openWindow = function() {
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
        mainWindow.on('closed', function() {
            mainWindow = null;
            subpy.kill('SIGINT');
        })
    }
    var startUp = function() {
                openWindow();
    };
    startUp();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
    // Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function() {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow()
        }
    })