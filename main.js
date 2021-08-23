const {app, BrowserWindow} = require('electron')
const path = require('path')
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
  })
  const splashWindow = new BrowserWindow ({
    width: 250,
    height: 250,
    show: true,
    frame: false,
    transparent: true,
    maximizable: false,
    resizable: false
  })
  splashWindow.loadFile('splash.html')
  mainWindow.loadFile('index.html')
  mainWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainWindow.show();
  });
}
app.on('ready', () => setTimeout(createWindow, 400));
app.disableHardwareAcceleration();