module.exports = (win) => {
  ;['maximize','unmaximize'].forEach((event) => {
    win.on(event, () => {
      win.webContents.send('app:toggle-maximize', win.isMaximized())
    })
  })
}
