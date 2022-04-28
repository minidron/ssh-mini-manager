import { useSettings } from './settings'

const { sshConfigPath } = useSettings()

export function useMenu () {
  async function open () {
    const result = await window.electron.invoke('dialog:open', {
      defaultPath: sshConfigPath.value,
      properties: ['openFile'],
    })

    if (result !== undefined) sshConfigPath.value = result[0]
  }

  return { open }
}
