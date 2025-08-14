import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(30, 64, 175, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #e0f2fe;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: white;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const CTAButton = styled.button`
  background: white;
  color: #1e40af;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
    transform: translateY(-1px);
  }
`;

const LanguageToggle = styled.button`
  background: transparent;
  color: #e0f2fe;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(30, 64, 175, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobileNavLink = styled.a`
  color: #e0f2fe;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: white;
  }
`;

const MobileCTAButton = styled.button`
  background: white;
  color: #1e40af;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-booking');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderInner>
          <Logo>MediCare AI</Logo>
          
          <DesktopNav>
            <NavLink href="#home">{t('header.home')}</NavLink>
            <NavLink href="#features">{t('header.features')}</NavLink>
            <NavLink href="#about">{t('header.about')}</NavLink>
            <NavLink href="#contact">{t('header.contact')}</NavLink>
            <LanguageToggle onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'Korean' : 'English'}
            </LanguageToggle>
            <CTAButton onClick={scrollToDemo}>{t('header.startNow')}</CTAButton>
          </DesktopNav>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
        </HeaderInner>
      </HeaderContent>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuContent>
          <MobileNavLink href="#home">{t('header.home')}</MobileNavLink>
          <MobileNavLink href="#home">{t('header.features')}</MobileNavLink>
          <MobileNavLink href="#home">{t('header.about')}</MobileNavLink>
          <MobileNavLink href="#home">{t('header.contact')}</MobileNavLink>
          <LanguageToggle onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'Korean' : 'English'}
          </LanguageToggle>
          <MobileCTAButton onClick={scrollToDemo}>{t('header.startNow')}</MobileCTAButton>
        </MobileMenuContent>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
