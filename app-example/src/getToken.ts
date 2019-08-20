import { IWindow } from './window.interface'

declare var window: IWindow

export const getToken = () =>
    new Promise<string | undefined>(
        (
            resolve: (token?: PromiseLike<string | undefined> | string) => void,
            reject: (error: PromiseLike<Error> | Error) => void
        ) => {
            let tries = 100
            const interval = setInterval(() => {
                if (--tries < 0) {
                    clearInterval(interval)
                    reject(new Error('Firebase Token could not be acquired!'))
                }
                if (!window.FCMPlugin) {
                    if (window.cordova) {
                        document.addEventListener(
                            'deviceready',
                            () => {
                                if (!window.FCMPlugin) {
                                    reject(new Error('FCMPlugin not available'))

                                    return
                                }
                                getToken()
                                    .then(resolve)
                                    .catch(reject)
                            },
                            false
                        )

                        return
                    }
                    resolve()

                    return
                }
                window.FCMPlugin.getToken(
                    (tokenFound: string) => {
                        if (tokenFound !== null && tokenFound !== '') {
                            clearInterval(interval)
                            resolve(tokenFound)
                        }
                    },
                    (e: Error) => {
                        reject(e)
                    }
                )
            }, 100)
        }
    )
