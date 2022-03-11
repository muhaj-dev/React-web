import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkWrapper,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
 } 
from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
            <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">How it works</FooterLink> 
                           <FooterLink to="/signin">Testimonies</FooterLink> 
                           <FooterLink to="/signin">Careers</FooterLink> 
                           <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                           <FooterLink to="/signin">Submit Video</FooterLink> 
                           <FooterLink to="/signin">Ambassadors</FooterLink> 
                           <FooterLink to="/signin">Agency</FooterLink> 
                           <FooterLink to="/signin">Influencer</FooterLink> 
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                           <FooterLink to="/signin">Contact</FooterLink> 
                           <FooterLink to="/signin">Support</FooterLink> 
                           <FooterLink to="/signin">Destinations</FooterLink> 
                           <FooterLink to="/signin">Sponsonship</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                           <FooterLink to="/signin">Instagram</FooterLink> 
                           <FooterLink to="/signin">Facebook</FooterLink> 
                           <FooterLink to="/signin">Youtube</FooterLink> 
                           <FooterLink to="/signin">Twitter</FooterLink> 
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialMediaLogo to='/'
                    onClick={toggleHome}
                    >
                        muhaj
                    </SocialMediaLogo>
                    <WebsiteRights>muhaj © {new Date().getFullYear()} All rightd reserved.</WebsiteRights>
                    <SocialIcons>
                    <SocialIconsLink href='/' terget='_blank'
                        aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconsLink>
                        <SocialIconsLink href='/' terget='_blank'
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconsLink>
                        <SocialIconsLink href='/' terget='_blank'
                        aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconsLink>
                        <SocialIconsLink href='/' terget='_blank'
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconsLink>
                        <SocialIconsLink href='/' terget='_blank'
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

Footer.propTypes = {}

export default Footer