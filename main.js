const {app, BrowserWindow} = require('electron')


//janela principal
var mainWindow =  null
async function createWindow(){
   mainWindow = new BrowserWindow({
    width:800,
    height:600
   })

   await mainWindow.loadFile('src/pages/editor/index.html')

   
}

//on ready
app.whenReady().then(createWindow)