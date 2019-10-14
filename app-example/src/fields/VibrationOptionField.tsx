import { h, JSX } from 'preact'

export type VibrationOption = 'true' | 'false' | 'custom'

interface IVibrationOptionFieldProps {
    selected: VibrationOption
    isDisabled?: boolean
    onChange: (newValue: VibrationOption) => void
}

export const VibrationOptionField = (props: IVibrationOptionFieldProps): JSX.Element => {
    const { isDisabled, selected } = { isDisabled: false, ...props }
    const onChange = (event: Event) => {
        if (props.onChange) {
            const select = event.target as HTMLSelectElement
            props.onChange(select.value as VibrationOption)
        }
    }

    return (
        <label style={isDisabled ? { textDecoration: 'line-through' } : {}}>
            Vibration
            <select onChange={onChange} disabled={isDisabled}>
                <option value="true" selected={selected === 'true'}>
                    Default
                </option>
                <option value="false" selected={selected === 'false'}>
                    Disabled
                </option>
                <option value="custom" selected={selected === 'custom'}>
                    Custom
                </option>
            </select>
        </label>
    )
}
