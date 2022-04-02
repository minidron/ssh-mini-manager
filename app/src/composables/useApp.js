export function useApp () {
  function close () {
    window.electron.send('app:close')
  }

  return { close }
}
