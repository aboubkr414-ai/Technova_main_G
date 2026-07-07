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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('techNovaTheme');
    return (saved === 'light' || saved === 'dark') ? (saved as 'light' | 'dark') : 'dark';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('techNovaLang', newLang);
  };

  const handleSetTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('techNovaTheme', newTheme);
  };

  const handlePageChange = (page: 'home' | 'championship') => {
    if (page === 'championship') {
      window.location.hash = '#championship';
    } else {
      window.location.hash = '#home';
    }
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '';
      const cleanHash = hash.replace(/^#\/?/, '');

      if (cleanHash === 'championship' || cleanHash === 'ijcc') {
        setCurrentPage('championship');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        
        // If there's a specific section on the home page, scroll to it smoothly
        if (cleanHash && cleanHash !== 'home') {
          setTimeout(() => {
            const element = document.getElementById(cleanHash);
            if (element) {
              const navbarOffset = 90; // offset for the sticky navbar height
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - navbarOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 150);
        } else if (cleanHash === 'home' || !cleanHash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Run once on initial render to parse deep-linked path
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleOpenRegister = () => {
    window.open('https://forms.gle/HAP7HhKNG9urFFH96', '_blank', 'noopener,noreferrer');
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`relative min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-amber-500/30 selection:text-amber-200 antialiased overflow-x-hidden ${
        lang === 'ar' ? 'font-sans-ar' : 'font-sans'
      }`}
    >
      {/* Premium ambient light grid backdrop */}
      <div className="fixed inset-0 bg-grid-slate dark:bg-grid-white opacity-[0.35] dark:opacity-[0.03] pointer-events-none z-0" />
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onRegisterClick={handleOpenRegister} 
        lang={lang} 
        setLang={handleSetLang} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        theme={theme}
        setTheme={handleSetTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero onRegisterClick={handleOpenRegister} lang={lang} onPageChange={handlePageChange} />
            <About lang={lang} />
            <Programs onRegisterClick={handleOpenRegister} lang={lang} />
            <Competition onRegisterClick={handleOpenRegister} lang={lang} onPageChange={handlePageChange} />
            <ChampionshipPromo lang={lang} onRegisterClick={handleOpenRegister} />
            <WhyChoose onRegisterClick={handleOpenRegister} lang={lang} />
            <Team lang={lang} />
            <Contact lang={lang} />
          </>
        ) : (
          <ChampionshipDetail 
            lang={lang} 
            onBackClick={() => handlePageChange('home')} 
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
