import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import { workPlaces } from '../../data'
import Workplace from './WorkplaceItem'


const WorkExperience = () => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/1.jpg`}>
            <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>My Work Experience</StyledTitle>
                {
                    workPlaces.map((wp, index) => 
                        <Workplace key={index} company={wp.company} title={wp.title} starting={wp.startingYear} ending={wp.endingYear} showWpName={wp.showWorkplaceName} isLast={index === workPlaces.length-1}/>
                    )
                }
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default WorkExperience
