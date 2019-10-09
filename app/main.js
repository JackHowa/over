const { app, BrowserWindow, Notification, Menu } = require("electron");

const applicationName = 'Over';
let mainWindow = null;

// basic lifecycle
app.on("ready", () => {
  // sucks if we see white screen first
  // now we want to load index then show browser
  // load html in, then show
  mainWindow = new BrowserWindow({ show: false });
  Menu.setApplicationMenu(applicationMenu);

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

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Relationship',
        click() {
          console.log('New over relationship');
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  // unshift adds to the beginning 
  template.unshift({
    label: applicationName,
    submenu: [
      {
        label: `About ${applicationName}`,
      },
      {
        label: `Quit ${applicationName}`
      }
    ]
  });
}

const applicationMenu = Menu.buildFromTemplate(template);