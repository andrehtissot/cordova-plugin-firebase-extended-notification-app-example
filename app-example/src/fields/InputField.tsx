import { h, JSX } from 'preact'

interface IInputFieldProps {
    label: string
    type?: string
    value: string | number | boolean
    isDisabled?: boolean
    onChange: (value: string | number | boolean) => void
}

const generateOnChange = (type: string, onChange: (value: unknown) => void) => {
    if (type === 'checkbox') {
        return (event: Event) => onChange((event.target as HTMLInputElement).checked)
    }
    if (type === 'number') {
        return (event: Event) => onChange((event.target as HTMLInputElement).valueAsNumber)
    }

    return (event: Event) => onChange((event.target as HTMLInputElement).value)
}

export const InputField = (props: IInputFieldProps): JSX.Element => {
    const { isDisabled, value, type, onChange } = { isDisabled: false, type: 'text', ...props }
    const inputProps = {
        disabled: isDisabled,
        onChange: generateOnChange(type, onChange),
    }

    return (
        <label style={isDisabled ? { textDecoration: 'line-through' } : {}}>
            {props.label}
            {['text', 'number', 'color', 'url'].includes(type) && (
                <input type={type} value={value as string} {...inputProps} />
            )}
            {type === 'checkbox' && <input type={type} checked={!!value} {...inputProps} />}
            {type === 'textarea' && <textarea children={value} {...inputProps} />}
        </label>
    )
}
