import React from 'react'
import styled from 'styled-components';
import { StyledTitle, StyledCommonSection, StyledParagraph, StyledSecondaryTitle } from '../../common/styles'
import EducationItem from './EducationItem'

const StyledAbout = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

const About = () => {
    return (
        <StyledCommonSection>
            <StyledAbout>
                <StyledTitle>About</StyledTitle>
                <StyledParagraph>I'm Nir, I hold a BSc in Information systems. I'm an avid learner, I like what I do and I'm not afraid of trying out new technologies and adopting them as I see fit. I currently work as a Full stack Engineer at Microsoft™.</StyledParagraph>
                <StyledSecondaryTitle>Education</StyledSecondaryTitle>
                <EducationItem title="BSc Information Systems" institute="University of Haifa" startingYear={2014} endingYear={2018} />
                <EducationItem title="BA Psychology" institute="The Open University" startingYear={2020} endingYear={2022} />
            </StyledAbout>
        </StyledCommonSection>
    )
}

export default About
