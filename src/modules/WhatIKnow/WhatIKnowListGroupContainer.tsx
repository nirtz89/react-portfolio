import { Badge } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import { StyledSecondaryTitle } from '../../common/styles';
import { IWhatIKnowItem } from './WhatIKnowItem';

interface IWhatIKnowListGroupContainerProps {
    group: IWhatIKnowItem[];
    title: string;
}

const StyledListGroupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5em;
    > span {
        margin: 0 .5em;
    }
`;

const WhatIKnowListGroupContainer = ({group, title}:IWhatIKnowListGroupContainerProps) => {
    return (
        <div>
            <StyledSecondaryTitle>{title}</StyledSecondaryTitle>
            <StyledListGroupContainer>
                {
                    group.map((item, index) => <span>{item.name} {item.isCurrentlyUsing && <Badge variant="solid" colorScheme="red">Using</Badge>}</span>)
                }
            </StyledListGroupContainer>
        </div>
    )
}

export default WhatIKnowListGroupContainer
