import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: #f8fafc;
  padding: 100px 0;
  color: black;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e40af;
`;

const AboutSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutText = styled.div``;

const AboutHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1e40af;
`;

const AboutDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 32px;
  font-size: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.1);
    border-color: #3b82f6;
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1e40af;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TechCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const TechTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1e40af;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #64748b;
`;

const TechName = styled.span`
  margin-left: 12px;
  font-size: 1rem;
`;

const TechCheck = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StatsCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const StatsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1e40af;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutHeader>
          <AboutTitle>{t('about.title')}</AboutTitle>
          <AboutSubtitle>{t('about.subtitle')}</AboutSubtitle>
        </AboutHeader>
        
        <AboutContent>
          <AboutText>
            <AboutHeading>{t('about.problem.title')}</AboutHeading>
            <AboutDescription>{t('about.problem.description')}</AboutDescription>
            
            <AboutHeading>{t('about.solution.title')}</AboutHeading>
            <AboutDescription>{t('about.solution.description')}</AboutDescription>
            
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>{t('about.features.target.title')}</FeatureTitle>
                  <FeatureDescription>{t('about.features.target.description')}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>💰</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>{t('about.features.cost.title')}</FeatureTitle>
                  <FeatureDescription>{t('about.features.cost.description')}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>🌍</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>{t('about.features.accessibility.title')}</FeatureTitle>
                  <FeatureDescription>{t('about.features.accessibility.description')}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            </FeatureList>
          </AboutText>
          
          <RightSection>
            <TechCard>
              <TechTitle>{t('about.technology.title')}</TechTitle>
              <TechList>
                <TechItem>
                  <TechCheck>✓</TechCheck>
                  <TechName>{t('about.technology.llm')}</TechName>
                </TechItem>
                <TechItem>
                  <TechCheck>✓</TechCheck>
                  <TechName>{t('about.technology.conversational')}</TechName>
                </TechItem>
                <TechItem>
                  <TechCheck>✓</TechCheck>
                  <TechName>{t('about.technology.analytics')}</TechName>
                </TechItem>
                <TechItem>
                  <TechCheck>✓</TechCheck>
                  <TechName>{t('about.technology.scalable')}</TechName>
                </TechItem>
              </TechList>
            </TechCard>
            
            <StatsCard>
              <StatsTitle>Platform Statistics</StatsTitle>
              <StatsGrid>
                <StatBox>
                  <StatNumber>127,500+</StatNumber>
                  <StatLabel>Target Users</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>90%</StatNumber>
                  <StatLabel>Cost Reduction</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>24/7</StatNumber>
                  <StatLabel>Availability</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>10x</StatNumber>
                  <StatLabel>Efficiency</StatLabel>
                </StatBox>
              </StatsGrid>
            </StatsCard>
          </RightSection>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
