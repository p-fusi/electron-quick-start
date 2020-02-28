// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let newNotification = new Notification("Ciao!", {
  body: "Come va?",
  requireInteraction: true
});
newNotification.onclick = () => {
    console.log('html5 notification onclick');
}