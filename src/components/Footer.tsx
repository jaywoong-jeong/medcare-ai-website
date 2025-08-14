import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 80px 0 40px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
  margin-bottom: 60px;
`;

const CompanyInfo = styled.div`
  max-width: 300px;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`;

const CompanyDescription = styled.p`
  color: #e0f2fe;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #1e40af;
    transform: translateY(-2px);
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: #e0f2fe;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.95rem;
    
    &:hover {
      color: white;
    }
  }
`;

const ContactInfo = styled.div`
  color: #e0f2fe;
  font-size: 0.95rem;
  line-height: 1.6;
  
  p {
    margin-bottom: 8px;
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 40px 0;
`;

const CopyrightText = styled.p`
  text-align: center;
  color: #e0f2fe;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <CompanyInfo>
            <CompanyName>MediCare AI</CompanyName>
            <CompanyDescription>
              {t('footer.companyDescription')}
            </CompanyDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="LinkedIn">🔗</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              <SocialLink href="#" aria-label="GitHub">📚</SocialLink>
            </SocialLinks>
          </CompanyInfo>
          
          <FooterSection>
            <FooterTitle>{t('footer.product.title')}</FooterTitle>
            <FooterList>
              <FooterLink>
                <a href="#features">{t('footer.product.features')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#about">{t('footer.product.about')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#demo-booking">{t('footer.product.demo')}</a>
              </FooterLink>
            </FooterList>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>{t('footer.company.title')}</FooterTitle>
            <FooterList>
              <FooterLink>
                <a href="#about">{t('footer.company.about')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#contact">{t('footer.company.contact')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#careers">{t('footer.company.careers')}</a>
              </FooterLink>
            </FooterList>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>{t('footer.contact.title')}</FooterTitle>
            <ContactInfo>
              <p>{t('footer.contact.email')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p>{t('footer.contact.address')}</p>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>
        
        <FooterDivider />
        
        <CopyrightText>
          © 2025 MediCare AI. {t('footer.copyright')}
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
