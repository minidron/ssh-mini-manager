const { contextBridge, ipcRenderer } = require('electron')

const allowed = {
  invoke: [
    'dialog:open',
    'file:fetch',
    'settings:fetch',
  ],

  on: ['app:toggle-maximize'],

  once: [],

  send: [
    'app:close',
    'window:maximize',
    'window:minimize',
  ],
}

contextBridge.exposeInMainWorld('electron', {
  invoke: async (channel, ...args) => {
    if (allowed.invoke.includes(channel)) {
      return await ipcRenderer.invoke(channel, ...args)
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
  },

  send: (channel, data) => {
    if (allowed.send.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
})
