import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onRegisterClick: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: 'home' | 'championship';
  onPageChange: (page: 'home' | 'championship') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Navbar({ onRegisterClick, lang, setLang, currentPage, onPageChange, theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === '#ijcc') {
      onPageChange('championship');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const navLinks = [
    { name: t.navHome, href: '#home' },
    { name: t.navAbout, href: '#about' },
    { name: t.navPrograms, href: '#programs' },
    { name: t.navCompetition, href: '#ijcc' },
    { name: t.navWhyChoose, href: '#why-choose' },
    { name: t.navTeam, href: '#team' },
    { name: t.navContact, href: '#contact' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-4 shadow-md dark:shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300">
              <span className="font-display text-lg tracking-wider">TN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {t.brandName} <span className="text-amber-500 dark:text-amber-400 font-normal">{t.brandSuffix}</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase -mt-1">
                {t.globalEducation}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group py-2 ${
                  link.href === '#ijcc' && currentPage === 'championship'
                    ? 'text-amber-500 dark:text-amber-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-400 transition-all duration-300 ${
                  link.href === '#ijcc' && currentPage === 'championship' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA, Theme & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-slate-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <a
              id="nav-register-btn"
              href="https://forms.gle/HAP7HhKNG9urFFH96"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-full text-sm shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>{t.registerNow}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </a>
          </div>

          {/* Mobile Hamburguer & Theme/Language Toggle Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-xl cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3 h-3 text-blue-500 dark:text-blue-400" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full z-40 lg:hidden px-6 pb-8 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/90 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`text-base font-medium py-2 border-b border-slate-100 dark:border-slate-900 transition-colors ${
                    link.href === '#ijcc' && currentPage === 'championship'
                      ? 'text-amber-500 dark:text-amber-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="https://forms.gle/HAP7HhKNG9urFFH96"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
            >
              <span>{t.registerNow}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </a>
            
            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{t.secureEnrollment}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
