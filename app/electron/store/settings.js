const { app } = require('electron')
const path = require('path')
const Store = require('electron-store')

const schema = {
	window: {
		type: 'object',
    properties: {
      width: {
        type: 'number',
        default: 800,
      },
      height: {
        type: 'number',
        default: 600,
      }
    },
    default: {}
  },

  sshConfigPath: {
    type: 'string',
    default: path.resolve(app.getPath('home'), '.ssh', 'config')
  }
}

module.exports = new Store({ schema })
