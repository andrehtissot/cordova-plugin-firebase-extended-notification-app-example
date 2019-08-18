import { IBodyContentState } from './BodyContentState.interface'

export const deepCloneBodyContent = (bodyContentState: IBodyContentState): IBodyContentState => ({
    ...bodyContentState,
    data: { ...bodyContentState.data },
})
