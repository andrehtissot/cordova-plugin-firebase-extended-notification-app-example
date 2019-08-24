import { IWindow } from './window.interface'

declare var window: IWindow

export const alertOnNotification = () => {
    if (!window.FCMPlugin) {
        return
    }
    window.FCMPlugin.onNotification((data: { wasTapped: boolean }) => {
        if (data.wasTapped) {
            // Notification was received on device tray and tapped by the user.
            alert(JSON.stringify(data))
        } else {
            // Notification was received in foreground. Maybe the user needs to be notified.
            // alert(JSON.stringify(data));
        }
    })
}
