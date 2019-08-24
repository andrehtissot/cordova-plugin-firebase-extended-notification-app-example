import { h } from 'preact'

interface IToggleDisableButtonProps {
    isDisabled: boolean
    onClick: () => void
}

export const ToggleDisableButton = (props: IToggleDisableButtonProps): JSX.Element => {
    const onClick = (event: Event) => {
        event.preventDefault()
        props.onClick()
    }

    return (
        <button class="nullify" onClick={onClick}>
            {props.isDisabled ? 'Give an\nArgument' : 'Use default'}
        </button>
    )
}
