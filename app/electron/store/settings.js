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
  }
}

module.exports = new Store({ schema })
