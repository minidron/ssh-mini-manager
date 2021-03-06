const { app } = require('electron')
const isDev = process.env.ELECTRON_ENV == 'dev' ? true : false

function createWindow () {
  const { BrowserWindow } = require('electron')
  const path = require('path')
  const settings = require('./store/settings')

  const { width, height } = settings.get('window')

  const win = new BrowserWindow({
    title: 'SSH mini Manager',
    width, height,
    frame: false,
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

  return win
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

  const win = createWindow()

  const initAppEvents = require('./events/app')
  const initListeners = require('./ipc/listeners')
  const initSenders = require('./ipc/senders')

  initAppEvents(win)
  initListeners(win)
  initSenders(win)
})
