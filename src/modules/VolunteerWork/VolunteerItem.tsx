import React from 'react'
import styled from 'styled-components';

export interface IVolunteerItemProps {
    title: string;
    description: string;
    startingYear?: string;
    endingYear?: string;
}

const StyledVolunteerItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    h3 {
        font-size: 18px;
        margin-bottom: .5em;
        font-weight: 600;
    }
    span {
        font-size: 15px;
        text-align: center;
    }
`;

const VolunteerItem = ({title, description}: IVolunteerItemProps) => {
    return (
        <StyledVolunteerItem>
            <h3>{title}</h3>
            <span>{description}</span>
        </StyledVolunteerItem>


)
}

export default VolunteerItem
