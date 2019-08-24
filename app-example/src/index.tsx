import 'polyfill-array-includes'
import { h, render } from 'preact'
import 'promise-polyfill/dist/polyfill.min' // Required for Android API 19
import { alertOnNotification } from './alertOnNotification'
import { BodyContent } from './BodyContent'
import './polyfills/object.entries'

render(<BodyContent />, document.getElementById('bodyContent') || document.body)

alertOnNotification()
