import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ChevronDown, Award, Play, Sparkles, Calendar, Trophy, Zap, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';
import BrochureSlideshow from './BrochureSlideshow';

interface HeroProps {
  onRegisterClick: () => void;
  lang: Language;
  onPageChange: (page: 'home' | 'championship') => void;
}

export default function Hero({ onRegisterClick, lang, onPageChange }: HeroProps) {
  const t = translations[lang];

  // Target date for countdown: August 31, 2026
  const targetDate = new Date('2026-08-31T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Generate random positions for subtle ambient particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-[#020617] bg-grid-slate dark:bg-grid-white"
    >
      {/* Immersive radial gradient glow (Stripe/Vercel style) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-blue-400/20 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ['0px', '-100px', '0px'],
              x: ['0px', '50px', '0px'],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* TOP GLOWING ALERT BAR: Highly Visible Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-gradient-to-r from-blue-50/90 via-slate-50/95 to-amber-50/90 dark:from-blue-950/80 dark:via-slate-900/90 dark:to-amber-950/80 border border-blue-200 dark:border-blue-500/30 rounded-2xl p-3.5 mb-10 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.compWidgetBadge}</span>
              <span className="hidden md:inline text-slate-400 dark:text-slate-500">•</span>
              <span className="hidden md:inline text-amber-650 dark:text-amber-400">{t.compWidgetPrize}</span>
            </div>
          </div>
          <button
            onClick={() => {
              onPageChange('championship');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1 group/alert cursor-pointer shrink-0 bg-transparent border-none outline-none"
          >
            <span>{t.compWidgetDetailsBtn}</span>
            <ArrowRight className={`w-3.5 h-3.5 group-hover/alert:translate-x-0.5 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-550/10 dark:bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 hover:bg-blue-500/15 transition-colors cursor-default"
        >
          <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
          <span className="font-mono uppercase tracking-wider text-[10px]">
            {t.heroBadge}
          </span>
          <span className="flex h-2 w-2 rounded-full bg-amber-450 animate-pulse" />
        </motion.div>

        {/* Large Typography Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.95] text-slate-900 dark:text-white"
        >
          {t.brandName} <br />
          <span className="bg-gradient-to-r from-blue-600 via-slate-800 to-amber-600 dark:from-blue-400 dark:via-white dark:to-amber-200 bg-clip-text text-transparent">
            {t.brandSuffix}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-8 leading-relaxed"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Reassuring Enrollment Policy notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-4xl bg-white/60 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4.5 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left rtl:sm:text-right relative overflow-hidden backdrop-blur-md shadow-lg"
        >
          {/* subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="p-2.5 bg-blue-500/10 border border-blue-500/15 rounded-xl shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>{t.warningHeader}</span>
              <span className="px-2 py-0.5 text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-mono uppercase tracking-wider border border-emerald-500/20 font-semibold">
                {t.warningFreeTitle}
              </span>
            </h4>
            <p className="text-slate-750 dark:text-slate-300 text-xs leading-relaxed font-light">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.warningFreeSubtitle} </span>
              {t.warningBody}
            </p>
          </div>
        </motion.div>

        {/* Brochure Slideshow Showcase (User Request: slideshow of champion brochures on upper part of homepage) */}
        <BrochureSlideshow lang={lang} onRegisterClick={onRegisterClick} />

        {/* CORE INTERACTIVE CHAMPIONSHIP BRIEFING MODULE: Address User request #1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white/60 dark:bg-slate-900/35 backdrop-blur-lg border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 md:p-8 mb-12 shadow-2xl relative overflow-hidden"
        >
          {/* Internal gradient overlays */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>{t.registrationsOpen}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Championship Quick Facts */}
            <div className="lg:col-span-6 text-left space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                🏆 {t.compWidgetTitle}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                {t.compWidgetHeading} <span className="text-amber-600 dark:text-amber-400">2026</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                {t.compWidgetDesc}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/10 px-3 py-1.5 rounded-xl">
                  <Trophy className="w-4 h-4" />
                  <span>{t.compWidgetPrize}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-200 dark:border-blue-500/10 px-3 py-1.5 rounded-xl">
                  <Zap className="w-4 h-4" />
                  <span>Ages 7-17 • Global & Online</span>
                </div>
              </div>
            </div>

            {/* Live Countdown Clock */}
            <div className="lg:col-span-6 bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 text-center space-y-4">
              <div className="flex items-center gap-2 justify-center text-[11px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-bold">
                <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-500 animate-pulse" />
                <span>{t.compWidgetCountdown}</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 text-center">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 p-2.5 rounded-xl">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-600 uppercase tracking-wider font-mono mt-0.5">{t.days}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 p-2.5 rounded-xl">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-600 uppercase tracking-wider font-mono mt-0.5">{t.hours}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 p-2.5 rounded-xl">
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-600 uppercase tracking-wider font-mono mt-0.5">{t.minutes}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 p-2.5 rounded-xl text-amber-600 dark:text-amber-400">
                  <div className="text-2xl md:text-3xl font-extrabold font-display">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-amber-600 dark:text-amber-500 uppercase tracking-wider font-mono mt-0.5">{t.seconds}</div>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 font-mono">
                {t.compWidgetDate}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://forms.gle/HAP7HhKNG9urFFH96"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 rounded-2xl font-bold text-base shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>{t.registerNow}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-white rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>{t.learnMore}</span>
            <Play className={`w-4 h-4 text-blue-500 fill-blue-500 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb8aju5J93wN93AVPE00"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-emerald-500/10" />
            <span>{t.whatsAppChannel}</span>
          </a>
        </motion.div>

        {/* Interactive Highlight Figures preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-200 dark:border-slate-900/80 pt-10 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-slate-900 dark:text-white">1000+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1 text-center">{t.statsStudents}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-slate-900 dark:text-white">50+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1 text-center">{t.statsSchools}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-slate-900 dark:text-white">10+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1 text-center">{t.statsCountries}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-slate-900 dark:text-white">100+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1 text-center">{t.statsProjects}</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors hidden md:flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">{t.exploreTechNova}</span>
          <ChevronDown className="w-4 h-4 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
}
