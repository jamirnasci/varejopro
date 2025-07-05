const {app, BrowserWindow} = require('electron')

const createWindow = ()=>{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Varejo Pro',
        webPreferences:{
            nodeIntegration: false,
        }
    })

    win.loadURL('http://localhost:5555/')
}

app.whenReady().then(()=>{
    createWindow()
})