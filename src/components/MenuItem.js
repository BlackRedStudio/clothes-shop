import React from 'react'
import { withRouter } from 'react-router-dom'
import {BackgroundImageContainer,
ContentContainer,
TitleContainer,
SubtitleContainer,
MenuItemContainer} from '../styles/MenuItemStyles'


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer imageUrl={imageUrl} />
            <ContentContainer>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)
