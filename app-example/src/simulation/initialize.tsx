import { h, render } from 'preact'
import { BodyContent } from './BodyContent'

export const initialize = () => {
    render(<BodyContent />, document.getElementById('bodyContent') || document.body)
}
