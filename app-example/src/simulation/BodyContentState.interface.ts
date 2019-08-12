import { NotificationStyle } from './fields/NotificationStyleField'
import { SoundOption } from './fields/SoundOptionField'
import { VibrationOption } from './fields/VibrationOptionField'

export interface IBodyContentState {
    notificationStyle: NotificationStyle
    vibrationOption: VibrationOption
    customVibration: string
    soundOption: SoundOption
    disabledFields: string[]
    resourceSoundOption: string
    onlineSoundOption: string
    data: {
        id: number
        title: string
        text: string
        summary: string
        textLines: string
        bigText: string
        bigPicture: string
        smallIcon: string
        largeIcon: string
        autoCancel: boolean
        vibrate: boolean | number[]
        color: string
        sound: boolean | string
        headsUp: boolean
        openApp: boolean
        channelId: string
        channelName: string
        channelDescription: string
    }
}
