import React from 'react'
import styled from 'styled-components';
import { StyledTitle, StyledCommonSection, StyledParagraph, StyledSecondaryTitle } from '../../common/styles'
import EducationItem, { IEducationItem } from './EducationItem'

export interface IAboutProps {
        type: string,
        data: any,
        title: string
}

const StyledAbout = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

const About = ({data, title}: IAboutProps) => {
    return (
        <StyledCommonSection>
            <StyledAbout>
                <StyledTitle>{title}</StyledTitle>
                <StyledParagraph>{data.about}</StyledParagraph>
                <StyledSecondaryTitle>{data.education.title}</StyledSecondaryTitle>
                {data.education.data.map((edu: IEducationItem) => 
                    <EducationItem title={edu.title} institute={edu.institute} startingYear={edu.startingYear} endingYear={edu.endingYear} />
                )}
            </StyledAbout>
        </StyledCommonSection>
    )
}

export default About
