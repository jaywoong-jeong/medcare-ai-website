import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  background: white;
  padding: 100px 0;
  color: black;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e40af;
`;

const FeaturesSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 64, 175, 0.1);
    border-color: #3b82f6;
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e40af;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
`;

const CTASection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const CTASubtitle = styled.p`
  font-size: 1.1rem;
  color: #e0f2fe;
  margin-bottom: 32px;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background: white;
  color: #1e40af;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }
`;

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <FeaturesHeader>
          <FeaturesTitle>{t('features.title')}</FeaturesTitle>
          <FeaturesSubtitle>{t('features.subtitle')}</FeaturesSubtitle>
        </FeaturesHeader>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>{t('features.ai.title')}</FeatureTitle>
            <FeatureDescription>{t('features.ai.description')}</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>💬</FeatureIcon>
            <FeatureTitle>{t('features.conversation.title')}</FeatureTitle>
            <FeatureDescription>{t('features.conversation.description')}</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>{t('features.analytics.title')}</FeatureTitle>
            <FeatureDescription>{t('features.analytics.description')}</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>{t('features.personalization.title')}</FeatureTitle>
            <FeatureDescription>{t('features.personalization.description')}</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🌐</FeatureIcon>
            <FeatureTitle>{t('features.accessibility.title')}</FeatureTitle>
            <FeatureDescription>{t('features.accessibility.description')}</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>{t('features.platform.title')}</FeatureTitle>
            <FeatureDescription>{t('features.platform.description')}</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
        
        <CTASection>
          <CTATitle>{t('features.cta.title')}</CTATitle>
          <CTASubtitle>{t('features.cta.subtitle')}</CTASubtitle>
          <CTAButton>{t('features.cta.button')}</CTAButton>
        </CTASection>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
