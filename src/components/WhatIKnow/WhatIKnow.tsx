import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import { StyledCommonSection, StyledTitle } from '../../common/styles';
import { config, themeConfig } from '../../config';
import WhatIKnowItem, { EWhatIKnowItemType, IWhatIKnowItem } from './WhatIKnowItem';
import WhatIKnowListGroupContainer from './WhatIKnowListGroupContainer';

const StyledWhatIKnow = styled.div`
    margin: 3em 0 0 0;
    width: 100%;
`;

const StyledWhatIKnowList = styled.div`
    margin-top: -1.5em;
    width: 100%;
`;

enum EWhatIKnowDisplay {
    LIST = "list",
    MARQUEE = "marquee",
    BOTH = "both"
}

export interface IWhatIKnowProps {
    type: string,
    data: IWhatIKnowItem[],
    display?: EWhatIKnowDisplay,
    title: string
}

const WhatIKnow = ({data, display, title}: IWhatIKnowProps) => {

    const [isList, setIsList] = useState(display === EWhatIKnowDisplay.LIST);

    return (
        <StyledCommonSection>
            <StyledTitle>{title}</StyledTitle>
            {display === EWhatIKnowDisplay.BOTH && <Button colorScheme={themeConfig[config.theme].color} variant="outline" size="xs" onClick={() => setIsList(!isList)}>{!isList ? 'View as list' : 'View as marquee'}</Button>}
            <StyledWhatIKnow>
                {
                !isList ?
                <Marquee speed={50} pauseOnHover={true}>
                    {data.map((item, index) => 
                        <WhatIKnowItem key={index} logo={item.logo} name={item.name} isCurrentlyUsing={item.isCurrentlyUsing} />
                    )}
                </Marquee> :
                <StyledWhatIKnowList>
                    {
                        (Object.keys(EWhatIKnowItemType) as Array<keyof typeof EWhatIKnowItemType>).map((key, index) => {
                            const whatIKnowTypeGroup = data.filter((wik) => wik.type === EWhatIKnowItemType[key]);
                            return whatIKnowTypeGroup.length > 0 && <WhatIKnowListGroupContainer key={index} title={EWhatIKnowItemType[key]} group={whatIKnowTypeGroup}/>
                        })
                    }
                </StyledWhatIKnowList>
                }
            </StyledWhatIKnow>
        </StyledCommonSection>
    )
}

export default WhatIKnow
