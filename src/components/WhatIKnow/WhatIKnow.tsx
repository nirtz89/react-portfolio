import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import { StyledCommonSection, StyledTitle } from '../../common/styles';
import { config, themeConfig } from '../../config';
import { EWhatIKnowItemType, whatIKnowList } from '../../data';
import WhatIKnowItem from './WhatIKnowItem';
import WhatIKnowListGroupContainer from './WhatIKnowListGroupContainer';

const StyledWhatIKnow = styled.div`
    margin: 3em 0;
    width: 100%;
`;

const StyledWhatIKnowList = styled.div`
    margin-top: -1.5em;
    width: 100%;
`;

const WhatIKnow = () => {

    const [isList, setIsList] = useState(false);

    return (
        <StyledCommonSection>
            <StyledTitle>What I Know (and use)</StyledTitle>
            <Button colorScheme={themeConfig[config.theme].color} variant="outline" size="xs" onClick={() => setIsList(!isList)}>{!isList ? 'View as list' : 'View as marquee'}</Button>
            <StyledWhatIKnow>
                {
                !isList ?
                <Marquee speed={50} pauseOnHover={true}>
                    {whatIKnowList.map((item, index) => 
                        <WhatIKnowItem key={index} logo={item.logo} name={item.name} isCurrentlyUsing={item.isCurrentlyUsing} />
                    )}
                </Marquee> :
                <StyledWhatIKnowList>
                    {
                        (Object.keys(EWhatIKnowItemType) as Array<keyof typeof EWhatIKnowItemType>).map((key, index) => {
                            const whatIKnowTypeGroup = whatIKnowList.filter((wik) => wik.type === EWhatIKnowItemType[key]);
                            return whatIKnowTypeGroup.length > 0 && <WhatIKnowListGroupContainer key={index} title={key.toString()} group={whatIKnowTypeGroup}/>
                        })
                    }
                </StyledWhatIKnowList>
                }
            </StyledWhatIKnow>
        </StyledCommonSection>
    )
}

export default WhatIKnow
