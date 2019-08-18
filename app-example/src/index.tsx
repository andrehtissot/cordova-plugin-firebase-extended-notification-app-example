import 'polyfill-array-includes'
import { h, render } from 'preact'
import { alertOnNotification } from './alertOnNotification'
import { BodyContent } from './BodyContent'
import './polyfills/object.entries'

render(<BodyContent />, document.getElementById('bodyContent') || document.body)

alertOnNotification()
