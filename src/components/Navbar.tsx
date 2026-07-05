import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'IJCC 2026', href: '#ijcc' },
    { name: 'Why TechNova', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300">
              <span className="font-display text-lg tracking-wider">TN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                TechNova <span className="text-amber-400 font-normal">International</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-1">
                Global Education
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="nav-register-btn"
              href="https://forms.gle/HAP7HhKNG9urFFH96"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-full text-sm shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="fixed top-20 left-0 w-full z-40 lg:hidden px-6 pb-8 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-slate-900"
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
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Secure International Enrollment 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
