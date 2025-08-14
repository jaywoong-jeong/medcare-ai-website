import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const DemoSection = styled.section`
  background: white;
  padding: 100px 0;
  color: black;
`;

const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DemoHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const DemoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e40af;
`;

const DemoSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const DemoCard = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(30, 64, 175, 0.1);
`;

const DemoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  padding: 60px 40px;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1e40af;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  color: #1e40af;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
  }
`;

const InfoSection = styled.div`
  background: #f8fafc;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1e40af;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #64748b;
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: 1rem;
`;

const InfoBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const SuccessCard = styled.div`
  text-align: center;
  padding: 60px 40px;
  background: white;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e40af;
`;

const SuccessMessage = styled.p`
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
`;

const NewBookingButton = styled.button`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
  }
`;

const DemoBooking: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNewBooking = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <DemoSection id="demo-booking">
        <DemoContainer>
          <SuccessCard>
            <SuccessIcon>✓</SuccessIcon>
            <SuccessTitle>{t('demo.success.title')}</SuccessTitle>
            <SuccessMessage>{t('demo.success.message')}</SuccessMessage>
            <NewBookingButton onClick={handleNewBooking}>
              {t('demo.success.newBooking')}
            </NewBookingButton>
          </SuccessCard>
        </DemoContainer>
      </DemoSection>
    );
  }

  return (
    <DemoSection id="demo-booking">
      <DemoContainer>
        <DemoHeader>
          <DemoTitle>{t('demo.title')}</DemoTitle>
          <DemoSubtitle>{t('demo.subtitle')}</DemoSubtitle>
        </DemoHeader>
        
        <DemoCard>
          <DemoContent>
            <FormSection>
              <FormTitle>{t('demo.form.title')}</FormTitle>
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">{t('demo.form.name')}</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">{t('demo.form.email')}</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="organization">{t('demo.form.organization')}</Label>
                    <Input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="role">{t('demo.form.role')}</Label>
                    <Select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t('demo.form.rolePlaceholder')}</option>
                      <option value="student">{t('demo.form.roleStudent')}</option>
                      <option value="professor">{t('demo.form.roleProfessor')}</option>
                      <option value="administrator">{t('demo.form.roleAdministrator')}</option>
                      <option value="other">{t('demo.form.roleOther')}</option>
                    </Select>
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <Label htmlFor="message">{t('demo.form.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('demo.form.messagePlaceholder')}
                    required
                  />
                </FormGroup>
                
                <SubmitButton type="submit">
                  {t('demo.form.submit')}
                </SubmitButton>
              </Form>
            </FormSection>
            
            <InfoSection>
              <InfoTitle>{t('demo.info.title')}</InfoTitle>
              <FeatureList>
                <FeatureItem>
                  <FeatureIcon>🎯</FeatureIcon>
                  <FeatureText>{t('demo.info.feature1')}</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>💬</FeatureIcon>
                  <FeatureText>{t('demo.info.feature2')}</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>📊</FeatureIcon>
                  <FeatureText>{t('demo.info.feature3')}</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🌐</FeatureIcon>
                  <FeatureText>{t('demo.info.feature4')}</FeatureText>
                </FeatureItem>
              </FeatureList>
              
              <InfoBox>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {t('demo.info.note')}
                </p>
              </InfoBox>
            </InfoSection>
          </DemoContent>
        </DemoCard>
      </DemoContainer>
    </DemoSection>
  );
};

export default DemoBooking;
