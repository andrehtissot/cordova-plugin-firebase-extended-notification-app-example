export interface IWindow {
    FCMPlugin?: {
        getToken(successfull: (token: string) => void, onError: (error: Error) => void): void
        onNotification(callback: (data: { wasTapped: boolean }) => void): void
    }
    FirebaseExtendedNotification?: {
        showNotification(notificationData: {}, notificationOptions: {}): void
    }
    localStorage: Storage
    cordova?: unknown
}
