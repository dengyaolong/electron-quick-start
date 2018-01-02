// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.getElementById('file-select').onchange = function(e) {
    let files = e.target.files;
    console.log(files)
}
var {ipcRenderer} = require('electron')

var a = {a: 1}
setInterval(()=> {
ipcRenderer.send('test-ipc', a)
}, 2000)
ipcRenderer.on('echo', function() {
    console.log(a)
})
