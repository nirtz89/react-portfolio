import React from 'react'
import styled from 'styled-components';
import { StyledTitle, StyledCommonSection, StyledParagraph, StyledSecondaryTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts';
import EducationItem, { IEducationItem } from './EducationItem'

export interface IAboutProps extends IModuleBase {
    data: any;
}

const StyledAbout = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

const About = ({data, title, index}: IAboutProps) => {
    return (
        <StyledCommonSection id={`module-${index}`}>
            <StyledAbout>
                <StyledTitle>{title}</StyledTitle>
                <StyledParagraph paddingTop="0">{data.about}</StyledParagraph>
                <StyledSecondaryTitle>{data.education.title}</StyledSecondaryTitle>
                {data.education.data.map((edu: IEducationItem) => 
                    <EducationItem title={edu.title} institute={edu.institute} startingYear={edu.startingYear} endingYear={edu.endingYear} />
                )}
            </StyledAbout>
        </StyledCommonSection>
    )
}

export default About
