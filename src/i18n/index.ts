import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 영어 번역
const en = {
  header: {
    home: 'Home',
    features: 'Features',
    about: 'About',
    contact: 'Contact',
    startNow: 'Get Started',
  },
  hero: {
    title: 'Revolutionizing Medical Education',
    subtitle: 'AI-powered virtual patient simulations for unlimited clinical practice',
    primaryButton: 'Start Free Trial',
    stats: {
      costReduction: 'Cost Reduction',
      availability: 'Availability',
      efficiency: 'Learning Efficiency',
    },
  },
  features: {
    title: 'AI-Powered Medical Education Platform',
    subtitle: 'Revolutionizing clinical training with conversational AI and virtual patient simulations',
    ai: {
      title: 'Advanced AI Engine',
      description: 'LLM-based conversational AI that creates realistic patient interactions for medical students',
    },
    conversation: {
      title: 'Natural Conversations',
      description: 'Practice patient communication skills with AI-generated realistic scenarios and feedback',
    },
    analytics: {
      title: 'Learning Analytics',
      description: 'Track progress, identify weaknesses, and receive personalized learning recommendations',
    },
    personalization: {
      title: 'Personalized Learning',
      description: 'Adaptive scenarios based on individual learning needs and performance data',
    },
    accessibility: {
      title: '24/7 Access',
      description: 'Practice anytime, anywhere with web-based platform accessible on all devices',
    },
    platform: {
      title: 'Scalable Platform',
      description: 'Support for multiple medical specialties and expandable scenario library',
    },
    cta: {
      title: 'Ready to Transform Medical Education?',
      subtitle: 'Join the future of clinical training with our AI-powered platform',
      button: 'Get Started',
    },
  },
  about: {
    title: 'About MediCare AI',
    subtitle: 'Transforming medical education through AI-powered virtual patient simulations',
    problem: {
      title: 'The Problem',
      description: 'Korean medical education faces limited clinical practice opportunities due to cost constraints and chronic shortage of training institutions. Students lack sufficient clinical experience before encountering real patients.',
    },
    solution: {
      title: 'Our Solution',
      description: 'AI-powered conversational virtual patient platform that provides unlimited practice opportunities, personalized feedback, and cost-effective clinical training accessible 24/7.',
    },
    features: {
      target: {
        title: 'Targeted Learning',
        description: 'Focus on specific clinical skills and communication techniques that need improvement',
      },
      cost: {
        title: 'Cost Effective',
        description: '90% cost reduction compared to traditional standardized patient training',
      },
      accessibility: {
        title: 'Universal Access',
        description: 'Available to all medical institutions regardless of location or resources',
      },
    },
    technology: {
      title: 'Core Technology',
      llm: 'LLM-based AI Engine',
      conversational: 'Conversational AI',
      analytics: 'Learning Analytics',
      scalable: 'Scalable Platform',
    },
  },
  demo: {
    title: 'Book Your Demo',
    subtitle: 'Experience our AI-powered medical education platform firsthand',
    form: {
      title: 'Request Demo',
      name: 'Full Name',
      email: 'Email Address',
      organization: 'Organization',
      role: 'Role',
      rolePlaceholder: 'Select your role',
      roleStudent: 'Medical Student',
      roleProfessor: 'Professor',
      roleAdministrator: 'Administrator',
      roleOther: 'Other',
      message: 'Message',
      messagePlaceholder: 'Tell us about your specific needs and questions...',
      submit: 'Request Demo',
    },
    info: {
      title: 'What You\'ll Experience',
      feature1: 'AI-powered patient conversations',
      feature2: 'Real-time feedback and guidance',
      feature3: 'Comprehensive learning analytics',
      feature4: 'Accessible from anywhere, anytime',
      note: 'Our demo will show you how our platform can transform medical education at your institution.',
    },
    success: {
      title: 'Demo Request Submitted!',
      message: 'Thank you for your interest! We\'ll contact you within 24 hours to schedule your personalized demo.',
      newBooking: 'Request Another Demo',
    },
  },
  footer: {
    companyDescription: 'Revolutionizing medical education through AI-powered virtual patient simulations and conversational AI technology.',
    product: {
      title: 'Product',
      features: 'Features',
      about: 'About',
      demo: 'Demo',
    },
    company: {
      title: 'Company',
      about: 'About Us',
      contact: 'Contact',
      careers: 'Careers',
    },
    contact: {
      title: 'Contact',
      email: 'jaywoong.jeong@gmail.com',
      phone: '+82 10-8998-7360',
      address: 'Daejeon, South Korea',
    },
    copyright: 'All rights reserved.',
  },
};

// 한국어 번역
const ko = {
  header: {
    home: '홈',
    features: '기능',
    about: '소개',
    contact: '문의',
    startNow: '시작하기',
  },
  hero: {
    title: '의료 교육을 혁신합니다',
    subtitle: '무제한 임상 실습을 위한 AI 기반 가상 환자 시뮬레이션',
    primaryButton: '무료체험 시작하기',
    stats: {
      costReduction: '비용 절약',
      availability: '접근성',
      efficiency: '학습 효율성',
    },
  },
  features: {
    title: 'AI 기반 의료 교육 플랫폼',
    subtitle: '대화형 AI와 가상 환자 시뮬레이션으로 임상 교육을 혁신합니다',
    ai: {
      title: '고급 AI 엔진',
      description: '의료 학생들을 위한 현실적인 환자 상호작용을 생성하는 LLM 기반 대화형 AI',
    },
    conversation: {
      title: '자연스러운 대화',
      description: 'AI가 생성한 현실적인 시나리오와 피드백으로 환자 소통 기술을 연습하세요',
    },
    analytics: {
      title: '학습 분석',
      description: '진행 상황을 추적하고, 약점을 파악하며, 맞춤형 학습 권장사항을 받으세요',
    },
    personalization: {
      title: '개인화 학습',
      description: '개별 학습 요구사항과 성과 데이터를 기반으로 한 적응형 시나리오',
    },
    accessibility: {
      title: '24/7 접근',
      description: '모든 기기에서 접근 가능한 웹 기반 플랫폼으로 언제 어디서나 연습하세요',
    },
    platform: {
      title: '확장 가능한 플랫폼',
      description: '여러 의료 전문 분야 지원 및 확장 가능한 시나리오 라이브러리',
    },
    cta: {
      title: '의료 교육을 혁신할 준비가 되셨나요?',
      subtitle: 'AI 기반 플랫폼으로 임상 교육의 미래에 참여하세요',
      button: '시작하기',
    },
  },
  about: {
    title: 'MediCare AI 소개',
    subtitle: 'AI 기반 가상 환자 시뮬레이션으로 의료 교육을 혁신합니다',
    problem: {
      title: '문제점',
      description: '한국의 의료 교육은 비용 제약과 만성적인 실습 기관 부족으로 인해 제한된 임상 실습 기회에 직면해 있습니다. 학생들은 실제 환자를 만나기 전에 충분한 임상 경험을 쌓지 못합니다.',
    },
    solution: {
      title: '해결책',
      description: '무제한 연습 기회, 맞춤형 피드백, 24/7 접근 가능한 비용 효율적인 임상 교육을 제공하는 AI 기반 대화형 가상 환자 플랫폼입니다.',
    },
    features: {
      target: {
        title: '목표 지향적 학습',
        description: '개선이 필요한 특정 임상 기술과 소통 기법에 집중',
      },
      cost: {
        title: '비용 효율성',
        description: '기존 표준화 환자 훈련 대비 90% 비용 절약',
      },
      accessibility: {
        title: '보편적 접근성',
        description: '위치나 자원에 관계없이 모든 의료 기관에서 이용 가능',
      },
    },
    technology: {
      title: '핵심 기술',
      llm: 'LLM 기반 AI 엔진',
      conversational: '대화형 AI',
      analytics: '학습 분석',
      scalable: '확장 가능한 플랫폼',
    },
  },
  demo: {
    title: '데모 예약하기',
    subtitle: 'AI 기반 의료 교육 플랫폼을 직접 경험해보세요',
    form: {
      title: '데모 요청',
      name: '성명',
      email: '이메일 주소',
      organization: '소속 기관',
      role: '직책',
      rolePlaceholder: '직책을 선택하세요',
      roleStudent: '의학과 학생',
      roleProfessor: '교수',
      roleAdministrator: '행정직원',
      roleOther: '기타',
      message: '메시지',
      messagePlaceholder: '구체적인 요구사항과 궁금한 점을 알려주세요...',
      submit: '데모 요청',
    },
    info: {
      title: '경험할 수 있는 것들',
      feature1: 'AI 기반 환자 대화',
      feature2: '실시간 피드백과 가이드',
      feature3: '종합적인 학습 분석',
      feature4: '언제 어디서나 접근 가능',
      note: '데모를 통해 우리 플랫폼이 귀하의 기관에서 의료 교육을 어떻게 혁신할 수 있는지 보여드립니다.',
    },
    success: {
      title: '데모 요청이 접수되었습니다!',
      message: '관심을 가져주셔서 감사합니다! 24시간 내에 개인 맞춤형 데모 일정을 조율하기 위해 연락드리겠습니다.',
      newBooking: '다른 데모 요청하기',
    },
  },
  footer: {
    companyDescription: 'AI 기반 가상 환자 시뮬레이션과 대화형 AI 기술을 통해 의료 교육을 혁신합니다.',
    product: {
      title: '제품',
      features: '기능',
      about: '소개',
      demo: '데모',
    },
    company: {
      title: '회사',
      about: '회사 소개',
      contact: '연락처',
      careers: '채용',
    },
    contact: {
      title: '연락처',
      email: 'jaywoong.jeong@gmail.com',
      phone: '+82 10-8998-7360',
      address: '대전, 대한민국',
    },
    copyright: '모든 권리 보유.',
  },
};

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // 명시적으로 영어를 기본 언어로 설정
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
