// use ipc renderer in renderer, main in main
const { remote, ipcRenderer } = require("electron");

// globals
let isEdited = false;

// need to require in the context of the main context
// all of this code renders in the main process
const mainProcess = remote.require("./main");

// get window for current reference shown
// get me a reference to which window
const currentWindow = remote.getCurrentWindow();

// get ui from html
const checkView = document.querySelector("#check");

// helpers

// updates current title on any window
// similar to vs code where you're changing which file
const updateUserInterface = isEdited => {
  let title = "Over";
  if (isEdited) {
    title = `${title} (Clicked)`;
  }
  currentWindow.setTitle(title);
};

// event listeners
checkView.addEventListener("click", event => {
  mainProcess.showOsNotification();
  updateUserInterface(true);
});

// communication from main process
// channel of arbitrary name
// ipcRenderer.on("helper", (event, args) => {});
