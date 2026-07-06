import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, FileCheck, Trophy, Sparkles, ArrowRight, Hourglass } from 'lucide-react';
import { Language, translations } from '../translations';

interface CompetitionProps {
  onRegisterClick: () => void;
  lang: Language;
  onPageChange: (page: 'home' | 'championship') => void;
}

export default function Competition({ onRegisterClick, lang, onPageChange }: CompetitionProps) {
  const t = translations[lang];

  // Target date: August 31, 2026 (Registration deadline)
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

  const competitionHighlights = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: t.hl1Title,
      desc: t.hl1Desc,
    },
    {
      icon: <Hourglass className="w-6 h-6 text-amber-400" />,
      title: t.hl2Title,
      desc: t.hl2Desc,
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-400" />,
      title: t.hl3Title,
      desc: t.hl3Desc,
    },
    {
      icon: <Trophy className="w-6 h-6 text-gold-400" />,
      title: t.hl4Title,
      desc: t.hl4Desc,
    },
  ];

  const timelineStages = [
    {
      stage: t.stg1Stage,
      title: t.stg1Title,
      date: t.stg1Date,
      desc: t.stg1Desc,
    },
    {
      stage: t.stg2Stage,
      title: t.stg2Title,
      date: t.stg2Date,
      desc: t.stg2Desc,
    },
    {
      stage: t.stg3Stage,
      title: t.stg3Title,
      date: t.stg3Date,
      desc: t.stg3Desc,
    },
  ];

  return (
    <section id="ijcc" className="py-24 bg-[#030712] relative overflow-hidden bg-grid-blue">
      {/* Background lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Banner with championship info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
              {t.compBadge}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              {t.compHeading}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {t.compDesc1}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.compDesc2}
            </p>
          </div>

          <div className="lg:col-span-5">
            {/* Real-time Digital Countdown clock */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 relative shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-spin" />
                <span>{t.registrationsOpen}</span>
              </div>
              
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest font-mono mb-6 text-center">
                {t.compCountdownHeader}
              </h4>

              <div className="grid grid-cols-4 gap-3 text-center mb-8">
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">{t.days}</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">{t.hours}</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">{t.minutes}</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl text-amber-400">
                  <div className="text-3xl md:text-4xl font-extrabold font-display">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-amber-500 uppercase tracking-wider font-mono mt-1">{t.seconds}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 justify-center mb-6 border-b border-slate-800 pb-6 text-center">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{t.compCountdownSub}</span>
              </div>

              <a
                href="https://forms.gle/HAP7HhKNG9urFFH96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white hover:bg-slate-100 text-slate-950 font-extrabold rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>{t.preRegisterNow}</span>
                <ArrowRight className={`w-5 h-5 group-hover/btn:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </a>

              <button
                onClick={() => {
                  onPageChange('championship');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full mt-3 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 font-bold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider font-mono"
              >
                <span>{lang === 'en' ? 'View Detailed Championship Info' : 'عرض تفاصيل ومعلومات البطولة بالكامل'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {competitionHighlights.map((hl) => (
            <div
              key={hl.title}
              className="bg-slate-900/30 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform">
                {hl.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                {hl.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {hl.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Horizontal / Vertical */}
        <div className="border border-slate-800 rounded-3xl p-8 lg:p-12 bg-slate-950/50 backdrop-blur-md">
          <h4 className="text-xl font-bold mb-10 font-display text-white text-center">
            {t.roadmapTitle}
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {timelineStages.map((stg, sIdx) => (
              <div key={stg.stage} className="relative flex flex-col justify-between">
                {/* Connector line for large screens */}
                {sIdx < 2 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-slate-800 to-transparent z-0" />
                )}

                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center font-mono text-sm font-bold text-amber-400 shadow-md">
                    {stg.stage}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-widest">
                      {stg.date}
                    </span>
                    <h5 className="text-base font-bold text-white mt-0.5">
                      {stg.title}
                    </h5>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
