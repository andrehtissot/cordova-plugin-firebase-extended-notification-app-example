import { h, JSX } from 'preact'
import { InputField } from './InputField'
import { SoundOption, SoundOptionField } from './SoundOptionField'
import { ToggleDisableButton } from './ToggleDisableButton'

interface ISoundFieldsProps {
    isDisabled: boolean
    soundOption: SoundOption
    resourceSoundOption: string
    onlineSoundOption: string
    onDisableClick: () => void
    onSoundOptionChange: (value: string) => void
    onResourceSoundChange: (value: string) => void
    onOnlineSoundChange: (value: string) => void
}

export const SoundFields = (props: ISoundFieldsProps): JSX.Element[] => {
    const {
        isDisabled,
        onDisableClick,
        soundOption,
        onResourceSoundChange,
        onOnlineSoundChange,
        onSoundOptionChange,
        resourceSoundOption,
        onlineSoundOption,
    } = props
    const fields = [
        <div>
            <ToggleDisableButton isDisabled={isDisabled} onClick={onDisableClick} />
            <SoundOptionField selected={soundOption} onChange={onSoundOptionChange} isDisabled={isDisabled} />
        </div>,
    ]
    if (soundOption === 'resource') {
        fields.push(
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Local Sound'}
                    value={resourceSoundOption}
                    onChange={onResourceSoundChange}
                    isDisabled={isDisabled}
                />
            </div>
        )
    }
    if (soundOption === 'online') {
        fields.push(
            <div>
                <button class="nullify hidden" />
                <InputField
                    label={'Online Sound'}
                    value={onlineSoundOption}
                    onChange={onOnlineSoundChange}
                    isDisabled={isDisabled}
                />
            </div>
        )
    }

    return fields
}
