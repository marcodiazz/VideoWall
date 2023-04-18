//creacion de las ventanas

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win1 = new BrowserWindow({
      width: 1920,
      height: 1080
    })
    const win2 = new BrowserWindow({
        width: 1920,
        height: 1080
      })
  
    win1.loadFile('./ventanas/index.html')
    win2.loadFile('./ventanas/hospitalInfo.html')
  }

  // cierre Y creacion de las ventanas
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })