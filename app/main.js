const { app, BrowserWindow, Notification } = require("electron");

let mainWindow = null;

// basic lifecycle
app.on("ready", () => {
  // sucks if we see white screen first
  // now we want to load index then show browser
  // load html in, then show
  mainWindow = new BrowserWindow({ show: false });

  // __dirname resolves to current file system place
  // node convention
  mainWindow.loadFile(`${__dirname}/index.html`);

  // event emitter node
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
});

// can use an export here
exports.showOsNotification = () => {
  // send native notification
  const notification = new Notification();
  notification.show();
};

// helper functions
// const helper = file => {
// can send a message here

// communicate to main process
// ipc main
// ipc render
// ipc = interprocess communication
//   mainWindow.webContents.send("helper", args);
// };
