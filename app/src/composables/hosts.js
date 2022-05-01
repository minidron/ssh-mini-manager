import { Host } from '/hosts'
import { ref, watchEffect } from 'vue'
import { useSettings } from './settings'
import SSHConfig from 'ssh-config'

const hosts = ref([])
const { sshConfigPath } = useSettings()

async function fetchHosts (sshPath) {
  if (sshPath !== undefined) {
    const fileContent = await window.electron.invoke('file:fetch', sshPath)
    const config = SSHConfig.parse(fileContent)

    hosts.value = config.map( (obj) => new Host(config.compute(obj.value)))
  }
}

watchEffect(() => fetchHosts(sshConfigPath.value))

export function useHosts () {
  return { hosts }
}
