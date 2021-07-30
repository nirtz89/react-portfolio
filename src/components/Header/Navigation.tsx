import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components';

const StyledNavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 2em;
`;

const Navigation = () => {
    return (
        <StyledNavigationWrapper>
            <IconButton aria-label="Search database" icon={<HamburgerIcon />} display={{ md: "none" }}/>
        </StyledNavigationWrapper>
    )
}

export default Navigation
