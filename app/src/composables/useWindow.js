export function useWindow () {
  function maximize () {
    window.electron.send('window:maximize')
  }

  function minimize () {
    window.electron.send('window:minimize')
  }

  return { maximize, minimize }
}
