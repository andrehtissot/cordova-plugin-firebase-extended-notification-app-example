import { IWindow } from './window.interface'

declare var window: IWindow

const setContentOnElement = (elementId: string, content: string) => {
    const tokenElement = document.getElementById(elementId)
    if (tokenElement) {
        tokenElement.innerHTML = content
    }
}

export const presentToken = () => {
    let tries = 100
    const interval = setInterval(() => {
        if (--tries < 0) {
            clearInterval(interval)
            setContentOnElement('token', 'Firebase Token could not be acquired!')
        }
        if (!window.FCMPlugin) {
            return
        }
        window.FCMPlugin.getToken(
            (tokenFound: string) => {
                if (tokenFound !== null && tokenFound !== '') {
                    setContentOnElement('token', `Firebase Token: ${tokenFound}`)
                    setContentOnElement('tokenFound', tokenFound)
                    clearInterval(interval)
                }
            },
            (e: Error) => {
                setContentOnElement('token', JSON.stringify(e))
            }
        )
    }, 100)
}
