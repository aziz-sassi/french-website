import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink,SocialMedia, SocialMediaWrap , SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import {FaFacebook, FaInstagram , FaTwitter} from 'react-icons/fa'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                  
                        <FooterLinksItems>
                          
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}> Dolla </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} Tous droits réservés</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//https://www.facebook.com/chiheb.saadaoui.7" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/chiheb.saadaoui.7/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
