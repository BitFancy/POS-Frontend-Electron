// console.log(__dirname);
// Module to control the application lifecycle and the native browser window.
const {
  app,
  BrowserWindow,
  protocol,
  screen: electronScreen,
} = require('electron');
const path = require('path');
const url = require('url');

// Create the native browser window.
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: electronScreen.getPrimaryDisplay().workArea.width,
    height: electronScreen.getPrimaryDisplay().workArea.height,
    autoHideMenuBar: true,
    skipTaskbar: true,
    icon: __dirname + '/icon.jfif',
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
  });

  // In production, set the initial browser path to the local bundle generated
  // by the Create React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  // const appURL = app.isPackaged
  //   ? url.format({
  //       pathname: path.join(__dirname, '../build/index.html'),
  //       protocol: 'file:',
  //       slashes: true,
  //     })
  //   : 'http://localhost:8002';
  app.isPackaged
    ? mainWindow.loadFile(path.join(__dirname, '../../index.html')) // Prod
    : mainWindow.loadURL('http://localhost:8002'); // Dev
  // mainWindow.loadFile(path.join(__dirname, '../../index.html')) // Prod
  // console.log(app.isPackaged);
  mainWindow.maximize();
  // mainWindow.loadURL(appURL);

  // Automatically open Chrome's DevTools in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
// function setupLocalFilesNormalizerProxy() {
//   protocol.registerHttpProtocol(
//     'file',
//     (request, callback) => {
//       const url = request.url.substr(8);
//       callback({ path: path.normalize(`${__dirname}/${url}`) });
//     },
//     (error) => {
//       if (error) console.error('Failed to register protocol');
//     }
//   );
// }

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  // setupLocalFilesNormalizerProxy();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
