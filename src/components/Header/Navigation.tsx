import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components';
import { config, themeConfig } from '../../config';

const StyledNavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 2em;
`;

interface INavigationProps {
    modules: any[];
}

const Navigation = ({modules}: INavigationProps) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <StyledNavigationWrapper>
            <IconButton aria-label="Search database" icon={<HamburgerIcon />} onClick={() => setIsNavOpen(true)} display={{ md: "none" }}/>
            {isNavOpen && <Drawer placement="left" isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} motionPreset="scale">
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Nir Tzezana</DrawerHeader>
                <DrawerBody>
                    {modules.map((module, index) => <Button as="a" href={`#module-${index}`} onClick={() => setIsNavOpen(false)} colorScheme={themeConfig[config.theme].color} variant="ghost" css={{display: 'flex', width: '100%'}} my={4} >{module.title}</Button>)}
                </DrawerBody>
                </DrawerContent>
            </Drawer>}
        </StyledNavigationWrapper>
    )
}

export default Navigation
