const { app } = require('electron')
const settings = require('../store/settings')

module.exports = (win) => {
  app.on('before-quit', (event) => {
    if (!win.canClose) {
      event.preventDefault()
      const { width, height } = win.getNormalBounds()
      settings.set('window', { width, height })
      win.canClose = true
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}
