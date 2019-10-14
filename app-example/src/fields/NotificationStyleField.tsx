import { h, JSX } from 'preact'

export type NotificationStyle = 'simple' | 'multipleLines' | 'bigText' | 'bigPicture'

interface INotificationStyleFieldProps {
    selected: NotificationStyle
    onChange: (newValue: NotificationStyle) => void
}

export const NotificationStyleField = (props: INotificationStyleFieldProps): JSX.Element => {
    const onChange = (event: Event) => {
        if (props.onChange) {
            const select = event.target as HTMLSelectElement
            props.onChange(select.value as NotificationStyle)
        }
    }

    return (
        <label>
            Notification Style
            <select onChange={onChange}>
                <option value="simple" selected={props.selected === 'simple'}>
                    Simple
                </option>
                <option value="multipleLines" selected={props.selected === 'multipleLines'}>
                    Multiple Lines
                </option>
                <option value="bigText" selected={props.selected === 'bigText'}>
                    Big Text
                </option>
                <option value="bigPicture" selected={props.selected === 'bigPicture'}>
                    Big Picture
                </option>
            </select>
        </label>
    )
}
