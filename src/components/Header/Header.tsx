import { Button, Link, theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, StackOverflowIcon } from '../../common/icons'
import { config, themeConfig } from '../../config'
import Navigation from './Navigation'

interface IHeaderProps {
    data: {
        name: string;
        title: string;
        showProfilePic: boolean;
        cvLink: string | null;
        linkedIn?: string;
        stackOverflow?: string;
        facebook?: string;
        instagram?: string;
        github?: string
    };
    modules: any[];
}

const StyledHeader = styled.div`
    width: 100vw;
    min-height: 50vh;
    padding-top: 1em;
    padding-bottom: 1em;
    background: url(${`./assets/themes/${config.theme}/bg.jpg`});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: 0%;
`

const StyledName = styled.h1`
    color: ${theme.colors.white};
    font-size: 50px;
    font-weight: 400;
`

const StyledWorkTitle = styled.h2`
    color: ${theme.colors.white};
    font-size: 25px;
    font-weight: 200;
`

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const StyledSocialLinks = styled.div`
    display: flex;
    margin-top: 2em;
    margin-bottom: 2em;
    > * {
        margin: 0 1em;
    }
`;


const Header = ({data: {name, title, showProfilePic, cvLink, linkedIn, stackOverflow, facebook, instagram, github}, modules}:IHeaderProps) => {
    return (
        <StyledHeader>
            <Navigation modules={modules} />
            {showProfilePic && <StyledImage src="./assets/profile.jpg" />}
            <StyledName>{name}</StyledName>
            <StyledWorkTitle>{title}</StyledWorkTitle>
            {cvLink && <Button colorScheme="gray" style={{color: "white"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(cvLink)} mt="4" variant="outline" size="md">Download my CV</Button>}
            {(github || linkedIn || instagram || facebook || stackOverflow) && <StyledSocialLinks>
               {github && <Link href={github} isExternal={true}><GithubIcon /></Link>}
               {linkedIn && <Link href={linkedIn} isExternal={true}><LinkedInIcon /></Link>}
               {instagram && <Link href={instagram} isExternal={true}><InstagramIcon /></Link>}
               {facebook && <Link href={facebook} isExternal={true}><FacebookIcon /></Link>}
               {stackOverflow && <Link href={stackOverflow} isExternal={true}><StackOverflowIcon /></Link>}
            </StyledSocialLinks>}
        </StyledHeader>
    )
}

export default Header
