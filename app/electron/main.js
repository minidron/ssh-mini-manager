const { app, ipcMain } = require('electron')
const isDev = process.env.ELECTRON_ENV == 'dev' ? true : false

function createWindow () {
  const { BrowserWindow } = require('electron')
  const path = require('path')
  const settings = require('./store/settings')

  const win = new BrowserWindow({
    title: 'SSH mini Manager',
    frame: false,
    backgroundColor: '#1D1D1D',
    useContentSize: true,
    ...(({ width, height }) => ({ width, height }))(settings.get('window')),
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

  const initListeners = require('./events/listeners')
  const initSenders = require('./events/senders')

  app.on('before-quit', (event) => {
    if (!win.canClose) {
      event.preventDefault()
      const size = (({ width, height }) => ({ width, height }))(win.getNormalBounds())
      settings.set('window', size)
      win.canClose = true
      app.quit()
    }
  })

  initListeners(win)
  initSenders(win)
}

app.whenReady().then(() => {
  if (isDev) {
    const {
      default: installExtension,
      VUEJS_DEVTOOLS
    } = require('electron-devtools-installer')

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
