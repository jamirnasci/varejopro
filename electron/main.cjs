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

    win.loadURL('http://localhost:5173/')
}

app.whenReady().then(()=>{
    createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})