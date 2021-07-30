import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import Workplace from './WorkplaceItem'

export interface IWorkplace {
    company: string;
    title: string;
    startingYear: number;
    endingYear: number | null;
    showWorkplaceName?: boolean;
}
export interface IWorkExperienceProps {
    type: string,
    data: IWorkplace[],
    title: string
}

const WorkExperience = ({data, title}: IWorkExperienceProps) => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/1.jpg`}>
            <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                {
                    data.map((wp, index) => 
                        <Workplace key={index} company={wp.company} title={wp.title} starting={wp.startingYear} ending={wp.endingYear} showWpName={wp.showWorkplaceName} isLast={index === data.length-1}/>
                    )
                }
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default WorkExperience
