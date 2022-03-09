import React from 'react'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkWrapper,
    FooterLinkTitle,
    FooterLink
 } 
from './FooterElements'

const Footer = () => {
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
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">How it works</FooterLink> 
                           <FooterLink to="/signin">Testimonies</FooterLink> 
                           <FooterLink to="/signin">Careers</FooterLink> 
                           <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">How it works</FooterLink> 
                           <FooterLink to="/signin">Testimonies</FooterLink> 
                           <FooterLink to="/signin">Careers</FooterLink> 
                           <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">How it works</FooterLink> 
                           <FooterLink to="/signin">Testimonies</FooterLink> 
                           <FooterLink to="/signin">Careers</FooterLink> 
                           <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

Footer.propTypes = {}

export default Footer