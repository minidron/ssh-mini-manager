import { ref } from 'vue'

export function useApp () {
  const isMaximized = ref(false)

  function maximize () {
    window.electron.send('window:maximize')
  }

  function minimize () {
    window.electron.send('window:minimize')
  }

  function close () {
    window.electron.send('app:close')
  }

  window.electron.on('app:toggle-maximize', (value) => {
    isMaximized.value = value
  })

  return { close, isMaximized, maximize, minimize }
}
