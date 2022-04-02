const { app, ipcMain } = require('electron')
const isDev = process.env.ELECTRON_ENV == "dev" ? true : false

function createWindow () {
  const { BrowserWindow } = require('electron')
  const path = require('path')

  const win = new BrowserWindow({
    title: 'SSH mini Manager',
    frame: false,
    width: 1200,
    height: 600,
    backgroundColor: '#1D1D1D',
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../vue/index.html')}`
  )

  // if (isDev) win.webContents.openDevTools()


  ipcMain.on('window:maximize', () => {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  })

  ipcMain.on('window:minimize', () => {
    win.minimize()
  })
}

app.whenReady().then(() => {
  if (isDev) {
    const { default: installExtension, VUEJS_DEVTOOLS } = require("electron-devtools-installer")

    installExtension(VUEJS_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err))
  }

  createWindow()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('app:close', () => {
  app.quit()
})
