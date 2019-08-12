import 'polyfill-array-includes'
import { alertOnNotification } from './alertOnNotification'
import './polyfills/object.entries'
import { presentToken } from './presentToken'
import { initialize } from './simulation/initialize'

document.addEventListener(
    'deviceready',
    () => {
        presentToken()
        alertOnNotification()
    },
    false
)

initialize()
