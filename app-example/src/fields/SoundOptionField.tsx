import { h } from 'preact'

export type SoundOption = 'true' | 'false' | 'resource' | 'online'

interface ISoundOptionFieldProps {
    selected: SoundOption
    isDisabled?: boolean
    onChange: (newValue: SoundOption) => void
}

export const SoundOptionField = (props: ISoundOptionFieldProps): JSX.Element => {
    const { isDisabled, selected } = { isDisabled: false, ...props }
    const onChange = (event: Event) => {
        if (props.onChange) {
            const select = event.target as HTMLSelectElement
            props.onChange(select.value as SoundOption)
        }
    }

    return (
        <label style={isDisabled ? { textDecoration: 'line-through' } : {}}>
            Sound
            <select onChange={onChange} disabled={isDisabled}>
                <option value="true" selected={selected === 'true'}>
                    Default
                </option>
                <option value="false" selected={selected === 'false'}>
                    Disabled
                </option>
                <option value="resource" selected={selected === 'resource'}>
                    Local Resource
                </option>
                <option value="online" selected={selected === 'online'}>
                    From the Web
                </option>
            </select>
        </label>
    )
}
