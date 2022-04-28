const { app, ipcMain } = require('electron')
const path = require('path')
const settings = require('../store/settings')

module.exports = (win) => {
  ipcMain.on('app:close', () => {
    app.quit()
  })

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

  ipcMain.handle('dialog:open', async (event, opt) => {
    const { dialog } = require('electron')
    const { canceled, filePaths } = await dialog.showOpenDialog(win, opt)
    if (!canceled) return filePaths
  })

  ipcMain.handle('settings:fetch', () => {
    return settings.store
  })
}
