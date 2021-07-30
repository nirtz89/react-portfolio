import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import VolunteerItem, { IVolunteerItemProps } from './VolunteerItem'

export interface IVolunteerWorkProps {
    type: string,
    data: IVolunteerItemProps[],
    title: string
}

const VolunteerWork = ({data, title}: IVolunteerWorkProps) => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/2.jpg`}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                {data.map(vi => <VolunteerItem title={vi.title} description={vi.description} />)}
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default VolunteerWork
