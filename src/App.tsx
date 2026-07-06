import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Competition from './components/Competition';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import ChampionshipDetail from './components/ChampionshipDetail';
import ChampionshipPromo from './components/ChampionshipPromo';
import { Language } from './translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'championship'>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('techNovaLang');
    return (saved === 'ar' || saved === 'en') ? (saved as Language) : 'en';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('techNovaLang', newLang);
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenRegister = () => {
    window.open('https://forms.gle/HAP7HhKNG9urFFH96', '_blank', 'noopener,noreferrer');
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`relative min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 selection:text-amber-200 antialiased overflow-x-hidden ${
        lang === 'ar' ? 'font-sans-ar' : 'font-sans'
      }`}
    >
      {/* Premium ambient light grid backdrop */}
      <div className="fixed inset-0 bg-grid-white opacity-[0.03] pointer-events-none z-0" />
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onRegisterClick={handleOpenRegister} 
        lang={lang} 
        setLang={handleSetLang} 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero onRegisterClick={handleOpenRegister} lang={lang} onPageChange={setCurrentPage} />
            <About lang={lang} />
            <Programs onRegisterClick={handleOpenRegister} lang={lang} />
            <Competition onRegisterClick={handleOpenRegister} lang={lang} onPageChange={setCurrentPage} />
            <ChampionshipPromo lang={lang} onRegisterClick={handleOpenRegister} />
            <WhyChoose onRegisterClick={handleOpenRegister} lang={lang} />
            <Team lang={lang} />
            <Contact lang={lang} />
          </>
        ) : (
          <ChampionshipDetail 
            lang={lang} 
            onBackClick={() => setCurrentPage('home')} 
            onRegisterClick={handleOpenRegister}
          />
        )}
      </main>

      {/* Footer Details */}
      <Footer lang={lang} />

      {/* Dynamic Admission Portal / Registration Form */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} lang={lang} />
    </div>
  );
}
