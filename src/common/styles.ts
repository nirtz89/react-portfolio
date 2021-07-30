import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled'
import { config, themeConfig } from '../config';

interface IStyledCommonSectionsProps {
    backgroundUrl?: string;
}

interface IStyledBackgroundCoverProps {
    fadeAmount?: number;
}

export const StyledTitle = styled.div`
    color: ${themeConfig[config.theme].main};
    font-size: 25px;
    text-align: center;
    font-weight: 500;
    padding-bottom: 8px;
    margin-bottom: 8px;
`;

export const StyledSecondaryTitle = styled.div`
    color: ${themeConfig[config.theme].main};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const StyledCommonSection = styled.div<IStyledCommonSectionsProps>`
    width: 100vw;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${props => props.backgroundUrl ? `url('${props.backgroundUrl}')` : theme.colors.white};
`;

export const StyledBackgroundCover = styled.div<IStyledBackgroundCoverProps>`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    opacity: ${props => props.fadeAmount ? 1 - (props.fadeAmount / 100) : 0.5};
`;

export const StyledBackgroundTopper = styled.div`
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface IStyledParagraphOverridePrpops {
    paddingTop?: number | string;
    paddingBottom?: number | string;
}

export const StyledParagraph = styled.p<IStyledParagraphOverridePrpops>`
    color: ${themeConfig[config.theme].darker};
    text-align: center;
    padding-top: ${props => `${props.paddingTop || 1}em`};
    padding-bottom: ${props => `${props.paddingBottom || 1}em`};
`;