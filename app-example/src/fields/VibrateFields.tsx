import { h, JSX } from 'preact'
import { InputField } from './InputField'
import { ToggleDisableButton } from './ToggleDisableButton'
import { VibrationOption, VibrationOptionField } from './VibrationOptionField'

interface IVibrationFieldsProps {
    isDisabled: boolean
    vibrationOption: VibrationOption
    customVibration: string
    onDisableClick: () => void
    onCustomVibrationChange: (value: string) => void
    onVibrationOptionChange: (value: string) => void
}

export const VibrationFields = (props: IVibrationFieldsProps): JSX.Element[] => {
    const {
        isDisabled,
        onDisableClick,
        vibrationOption,
        onCustomVibrationChange,
        customVibration,
        onVibrationOptionChange,
    } = props
    const fields = [
        <div>
            <ToggleDisableButton isDisabled={isDisabled} onClick={onDisableClick} />
            <VibrationOptionField
                selected={vibrationOption}
                onChange={onVibrationOptionChange}
                isDisabled={isDisabled}
            />
        </div>,
    ]
    if (vibrationOption === 'custom') {
        fields.push(
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Vibrate As'}
                    value={customVibration}
                    onChange={onCustomVibrationChange}
                    isDisabled={isDisabled}
                />
            </div>
        )
    }

    return fields
}
