const { app, ipcMain } = require('electron')

module.exports = (win) => {
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

  ipcMain.on('app:close', () => {
    app.quit()
  })
}
