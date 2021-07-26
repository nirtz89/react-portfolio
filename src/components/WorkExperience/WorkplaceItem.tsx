import React from 'react'
import styled from 'styled-components';
import { config, themeConfig } from '../../config';

interface IWorkplaceItemProps {
    company: string;
    title: string;
    starting: number;
    ending: number | null;
    showWpName?: boolean;
    isLast?: boolean;
}

const StyledWorkplaceItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
        width: 200px;
    }
`;

const StyledWorkplaceLine = styled.div`
    height: 100px;
    width: 1px;
    background-color: ${themeConfig[config.theme].main};
    margin-top: 1em;
`;


const StyledWorkplaceTitle = styled.span`
    font-weight: 500;
    padding-top: .5em;
    padding-bottom: .5em;
`;


const StyledWorkplaceDates = styled.div`
    padding-top: .5em;
    padding-bottom: .5em;
`;

const WorkplaceItem = ({company, title, starting, ending, showWpName = false, isLast = false }: IWorkplaceItemProps) => {
    return (
        <StyledWorkplaceItem>
            <img src={`./assets/logos/${company.toLowerCase()}.png`} alt="" />
            {showWpName && company}
            <StyledWorkplaceTitle>{title}</StyledWorkplaceTitle>
            <StyledWorkplaceDates>{starting} - {ending ?? 'Present'}</StyledWorkplaceDates>
            {!isLast && <StyledWorkplaceLine />}
        </StyledWorkplaceItem>
    )
}

export default WorkplaceItem
