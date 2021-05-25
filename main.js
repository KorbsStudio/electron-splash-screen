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
    width: 500,
    height: 500,
    show: true,
    frame: false,
    transparent: true,
    maximizable: false,
    resizable: false
  })
  splashWindow.loadFile('splash.html')
  mainWindow.loadFile('index.html')
  setTimeout(() => {
   mainWindow.show();
  }, 5000); 
  setTimeout(() => {
    splashWindow.close();
  }, 4000);
}
app.on('ready', () => setTimeout(createWindow, 400));
app.disableHardwareAcceleration();