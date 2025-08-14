import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import DemoBooking from './components/DemoBooking';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // 언어 변경 시 body의 lang 속성 업데이트
    document.body.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <DemoBooking />
      <Footer />
    </div>
  );
}

export default App;
