const { contextBridge, ipcRenderer } = require('electron')

const allowed = {
  send: ['app:close'],
  on: [],
  once: [],
}

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => {
    if (allowed.send.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },

  on: (channel, func) => {
    if (allowed.on.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  },

  once: (channel, func) => {
    if (allowed.once.includes(channel)) {
      ipcRenderer.once(channel, (event, ...args) => func(...args))
    }
  }
})
