import React from 'react'
import styled from 'styled-components';

export interface IEducationItem {
    title: string;
    institute: string;
    startingYear: string;
    endingYear: string | null;
}

const StyledEducationItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    h3 {
        font-size: 18px;
        margin-bottom: .5em;
        font-weight: 600;
    }
    span {
        font-size: 15px;
    }
`;

const EducationItem = ({title, institute, startingYear, endingYear}: IEducationItem) => {
    return (
        <StyledEducationItem>
            <h3>{title}</h3>
            <span>{institute}, {startingYear} - {endingYear}</span>
        </StyledEducationItem>
    )
}

export default EducationItem
