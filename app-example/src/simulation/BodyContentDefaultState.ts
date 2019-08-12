import { IBodyContentState } from './BodyContentState.interface'

export const BodyContentDefaultState: IBodyContentState = {
    customVibration: '[200, 300, 200, 300]',
    data: {
        autoCancel: true,
        bigPicture:
            'https://cloud.githubusercontent.com/assets/7321362/24875178/1e58d2ec-1ddc-11e7-96ed-ed8bf011146c.png',
        bigText:
            'Big text line 1\nBig text line 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Mauris mollis urna sed nisl venenatis, a tincidunt orci iaculis. In hac habitasse platea' +
            'dictumst. Nulla quis hendrerit risus. Morbi neque lectus, laoreet quis dui quis, luctus' +
            'blandit mauris. Sed ullamcorper risus et lorem facilisis, sit amet tristique nulla' +
            'rutrum. Vivamus auctor pulvinar ligula, tempor lacinia arcu commodo in. Ut condimentum' +
            'dolor ac felis venenatis, sit amet cursus erat accumsan. Aliquam a justo elit. Maecenas' +
            'dignissim suscipit ipsum, nec laoreet velit.',
        channelDescription: 'Default notification',
        channelId: 'notification',
        channelName: 'Notification',
        color: '#0000ff',
        headsUp: false,
        id: 999,
        largeIcon: 'https://avatars2.githubusercontent.com/u/1174345?v=3&s=96',
        openApp: false,
        smallIcon: 'mipmap/icon',
        sound: true,
        summary: 'Summary test',
        text: 'Message text',
        textLines: 'Text line 1\nText line 2\nText line 3\nText line 4\nText line 5',
        title: 'App Example Title',
        vibrate: true,
    },
    disabledFields: [],
    notificationStyle: 'simple',
    onlineSoundOption: 'http://tindeck.com/download/pro/yjuow/Not_That_Guy.mp3',
    resourceSoundOption: 'res://raw/lost_european_the_beginning_of_the_end_mp3',
    soundOption: 'true',
    vibrationOption: 'true',
}

export const getDeepClone = (): IBodyContentState => ({
    ...BodyContentDefaultState,
    data: { ...BodyContentDefaultState.data },
})
