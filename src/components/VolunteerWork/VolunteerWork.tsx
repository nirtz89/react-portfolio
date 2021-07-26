import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import VolunteerItem from './VolunteerItem'

const VolunteerWork = () => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/2.jpg`}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>Volunteer Work</StyledTitle>
                <VolunteerItem title="Tech-Career" description="Tutoring and mentoring students in Web and other CS topics" />
                <VolunteerItem title="Sahar" description="Building a landing page for the group" />
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default VolunteerWork
