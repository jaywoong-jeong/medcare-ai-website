import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 48px;
  color: #e0f2fe;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

const PrimaryButton = styled.button`
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
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #e0f2fe;
  font-weight: 500;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  top: -100px;
  right: -150px;
  
  &::before {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-booking');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <BackgroundShapes>
        <Circle />
      </BackgroundShapes>
      
      <HeroContainer>
        <HeroContent>
          <HeroTitle>{t('hero.title')}</HeroTitle>
          <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
          
          <ButtonGroup>
            <PrimaryButton onClick={scrollToDemo}>{t('hero.primaryButton')}</PrimaryButton>
          </ButtonGroup>
          
          <StatsContainer>
            <StatItem>
              <StatNumber>90%</StatNumber>
              <StatLabel>{t('hero.stats.costReduction')}</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24/7</StatNumber>
              <StatLabel>{t('hero.stats.availability')}</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10x</StatNumber>
              <StatLabel>{t('hero.stats.efficiency')}</StatLabel>
            </StatItem>
          </StatsContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
