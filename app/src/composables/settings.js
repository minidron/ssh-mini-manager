import { ref } from 'vue'

const conf = {
  sshConfigPath: ref()
}

export function useSettings () {
  async function fetch () {
    const store = await window.electron.invoke('settings:fetch')
    const commonKeys = Object.keys(store)
                             .filter( (key) => Object.keys(conf).includes(key))
    commonKeys.forEach( (el) => { conf[el].value = store[el] })
  }

  return { ...conf, fetch }
}
