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
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}> Dolla </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} Tous droits réservés</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
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
