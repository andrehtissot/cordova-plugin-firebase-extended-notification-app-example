import { Component, h } from 'preact'
import { IWindow } from '../window.interface'
import { getDeepClone } from './BodyContentDefaultState'
import { IBodyContentState } from './BodyContentState.interface'
import { InputField } from './fields/InputField'
import { NotificationStyle, NotificationStyleField } from './fields/NotificationStyleField'
import { SoundOption, SoundOptionField } from './fields/SoundOptionField'
import { ToggleDisableButton } from './fields/ToggleDisableButton'
import { VibrationOption, VibrationOptionField } from './fields/VibrationOptionField'

declare var window: IWindow

export class BodyContent extends Component<any, any> {
    public state: IBodyContentState = getDeepClone()

    public constructor() {
        super()
        this.loadSavedOptions()
    }

    public render(): JSX.Element {
        // console.log(JSON.stringify({ ...this.state }, null, 2))

        return (
            <div>
                <h2>Firebase Extended Notification App Example</h2>
                <div id="token" />
                <span id="tokenFound" style="display:none" />
                <h3>Try locally to simulate notifications</h3>
                <form id="notificationOptionsForm" onSubmit={this.onSubmit}>
                    {this.renderNotificationStyleField()}
                    {this.renderField('id', 'Id', 'number')}
                    {this.renderField('title', 'Title')}
                    {this.state.notificationStyle === 'simple' && this.renderField('text', 'Text')}
                    {this.state.notificationStyle === 'multipleLines' &&
                        this.renderField('textLines', 'Text Lines', 'textarea')}
                    {this.state.notificationStyle === 'bigText' && this.renderField('bigText', 'Big Text', 'textarea')}
                    {this.state.notificationStyle === 'bigPicture' &&
                        this.renderField('bigPicture', 'Big Picture', 'url')}
                    {this.state.notificationStyle !== 'simple' && this.renderField('summary', 'Summary')}
                    {this.renderField('smallIcon', 'Small Icon')}
                    {this.renderField('largeIcon', 'Large Icon', 'url')}
                    {this.renderField('autoCancel', 'Auto Cancel', 'checkbox')}
                    {this.renderVibrateFields()}
                    {this.renderField('color', 'Color', 'color')}
                    {this.renderSoundFields()}
                    {this.renderField('headsUp', 'Heads-up', 'checkbox')}
                    {this.renderField('openApp', 'Open app', 'checkbox')}
                    {this.renderField('channelId', 'Channel Id')}
                    {this.renderField('channelName', 'Channel Name')}
                    {this.renderField('channelDescription', 'Channel Description')}
                    <button type="submit">Show Notification</button>
                    <button type="button" onClick={this.saveOptionsLocally}>
                        Save Options Locally
                    </button>
                    <button type="button" onClick={this.loadSavedOptions}>
                        Load Saved Options
                    </button>
                    <button type="button" onClick={this.resetFieldValues}>
                        Reset Field Values
                    </button>
                </form>
                {this.renderGeneratedCode()}
            </div>
        )
    }

    private onSubmit = (event: Event) => {
        event.preventDefault()
        if (window.FirebaseExtendedNotification) {
            window.FirebaseExtendedNotification.showNotification(
                { dataValuesToGetWhenClickedOn: 111 },
                this.getPresentableData()
            )
        } else {
            alert('This functionality only runs over cordova!')
        }
    }

    private renderNotificationStyleField = () => (
        <div>
            <button class="nullify hidden" />
            <NotificationStyleField selected={this.state.notificationStyle} onChange={this.onNotificationStyleChange} />
        </div>
    )

    private renderField = (
        fieldName: keyof IBodyContentState['data'],
        label: string,
        type: 'text' | 'number' | 'textarea' | 'checkbox' | 'color' | 'url' = 'text'
    ) => (
        <div>
            <ToggleDisableButton
                isDisabled={this.state.disabledFields.includes(fieldName)}
                onClick={() => this.onToggleDisableField(fieldName)}
            />
            <InputField
                label={label}
                type={type}
                value={this.state.data[fieldName] ? '' + this.state.data[fieldName] : ''}
                isDisabled={this.state.disabledFields.includes(fieldName)}
                onChange={(value: unknown) => this.onChangeDataValue(fieldName, value)}
            />
        </div>
    )

    private renderVibrateFields = () => [
        <div>
            <ToggleDisableButton
                isDisabled={this.state.disabledFields.includes('vibrate')}
                onClick={() => this.onToggleDisableField('vibrate')}
            />
            <VibrationOptionField
                selected={this.state.vibrationOption}
                onChange={this.onVibrationOptionChange}
                isDisabled={this.state.disabledFields.includes('vibrate')}
            />
        </div>,
        this.state.vibrationOption === 'custom' && (
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Vibrate As'}
                    value={this.state.customVibration}
                    onChange={this.onCustomVibrationChange}
                    isDisabled={this.state.disabledFields.includes('vibrate')}
                />
            </div>
        ),
    ]

    private renderSoundFields = () => [
        <div>
            <ToggleDisableButton
                isDisabled={this.state.disabledFields.includes('sound')}
                onClick={() => this.onToggleDisableField('sound')}
            />
            <SoundOptionField
                selected={this.state.soundOption}
                onChange={this.onSoundOptionChange}
                isDisabled={this.state.disabledFields.includes('sound')}
            />
        </div>,
        this.state.soundOption === 'resource' && (
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Local Sound'}
                    value={this.state.resourceSoundOption}
                    onChange={this.onResourceSoundChange}
                    isDisabled={this.state.disabledFields.includes('sound')}
                />
            </div>
        ),
        this.state.soundOption === 'online' && (
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Online Sound'}
                    value={this.state.onlineSoundOption}
                    onChange={this.onOnlineSoundChange}
                    isDisabled={this.state.disabledFields.includes('sound')}
                />
            </div>
        ),
    ]

    private onNotificationStyleChange = (notificationStyle: NotificationStyle) => {
        this.setState({
            notificationStyle,
        })
    }

    private onToggleDisableField = (fieldName: string) => {
        if (this.state.disabledFields.includes(fieldName)) {
            this.state.disabledFields = this.state.disabledFields.filter((field: string) => field !== fieldName)
        } else {
            this.state.disabledFields.push(fieldName)
        }
        this.setState({
            disabledFields: this.state.disabledFields,
        })
    }

    private onChangeDataValue = (fieldName: string, value: unknown) => {
        this.setState({ data: { ...this.state.data, [fieldName]: value } })
    }

    private onVibrationOptionChange = (vibrationOption: VibrationOption) => {
        let vibrate: boolean | number[]
        if (vibrationOption === 'true') {
            vibrate = true
        } else if (vibrationOption === 'false') {
            vibrate = false
        } else {
            vibrate = JSON.parse(this.state.customVibration)
        }

        this.setState({
            data: {
                ...this.state.data,
                vibrate,
            },
            vibrationOption,
        })
    }

    private onCustomVibrationChange = (value: string) => {
        this.setState({
            customVibration: value,
            data: {
                ...this.state.data,
                vibrate: JSON.parse(value),
            },
        })
    }

    private onSoundOptionChange = (soundOption: SoundOption) => {
        let sound: string | boolean
        if (soundOption === 'true') {
            sound = true
        } else if (soundOption === 'false') {
            sound = false
        } else if (soundOption === 'resource') {
            sound = this.state.resourceSoundOption
        } else {
            sound = this.state.onlineSoundOption
        }

        this.setState({
            data: {
                ...this.state.data,
                sound,
            },
            soundOption,
        })
    }

    private onResourceSoundChange = (value: string) => {
        this.setState({
            data: {
                ...this.state.data,
                sound: value,
            },
            resourceSoundOption: value,
        })
    }

    private onOnlineSoundChange = (value: string) => {
        this.setState({
            data: {
                ...this.state.data,
                sound: value,
            },
            onlineSoundOption: value,
        })
    }

    private saveOptionsLocally = () => {
        window.localStorage.setItem('state', JSON.stringify(this.state))
        alert('Saved! Now the options will be recovered when restart.')
    }

    private loadSavedOptions = () => {
        const savedState = window.localStorage.getItem('state')
        if (savedState) {
            this.setState(JSON.parse(savedState))
        }
    }

    private resetFieldValues = () => {
        if (confirm('Are you sure you want to lose your changes?')) {
            this.setState(getDeepClone())
        }
    }

    private getPresentableData = () => {
        const notificationOptions = {}
        const skipKeys = [...this.state.disabledFields]
        if (this.state.notificationStyle === 'simple') {
            skipKeys.push('bigPicture', 'bigText', 'summary', 'textLines')
        } else if (this.state.notificationStyle === 'multipleLines') {
            skipKeys.push('bigPicture', 'bigText', 'text')
        } else if (this.state.notificationStyle === 'bigText') {
            skipKeys.push('bigPicture', 'textLines', 'text')
        } else if (this.state.notificationStyle === 'bigPicture') {
            skipKeys.push('bigText', 'textLines', 'text')
        }
        for (const [key, value] of Object.entries(this.state.data)) {
            if (!skipKeys.includes(key)) {
                notificationOptions[key] = value
            }
        }

        return notificationOptions
    }

    private renderGeneratedCode = () => {
        const tokenFoundElement = document.getElementById('tokenFound')
        const token =
            (tokenFoundElement && tokenFoundElement.innerHTML) || 'bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...'

        return (
            <pre id="generatedCode">
                {JSON.stringify(
                    {
                        data: {
                            dataValuesToGetWhenClickedOn: 111,
                            notificationOptions: this.getPresentableData(),
                        },
                        to: token,
                    },
                    null,
                    4
                )}
            </pre>
        )
    }
}
