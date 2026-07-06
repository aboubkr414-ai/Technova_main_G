import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Trophy, Landmark, Users2, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 1.5, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endVal = end;
    const totalFrames = Math.round(duration * 60); // 60 FPS
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentCount = Math.round(endVal * (progress * (2 - progress)));
      
      if (frame >= totalFrames) {
        setCount(endVal);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

interface WhyChooseProps {
  onRegisterClick: () => void;
  lang: Language;
}

export default function WhyChoose({ onRegisterClick, lang }: WhyChooseProps) {
  const t = translations[lang];

  const stats = [
    {
      icon: <Users2 className="w-5 h-5 text-blue-400" />,
      title: t.statsS1Title,
      target: 1000,
      suffix: '+',
      desc: t.statsS1Desc,
    },
    {
      icon: <Landmark className="w-5 h-5 text-rose-400" />,
      title: t.statsS2Title,
      target: 50,
      suffix: '+',
      desc: t.statsS2Desc,
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: t.statsS3Title,
      target: 10,
      suffix: '+',
      desc: t.statsS3Desc,
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: t.statsS4Title,
      target: 100,
      suffix: '+',
      desc: t.statsS4Desc,
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-slate-50 dark:bg-[#020617] relative bg-grid-slate dark:bg-grid-white">
      {/* Decorative center spotlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-slate-200 via-slate-300 dark:from-slate-900 dark:via-slate-800 to-transparent pointer-events-none" />

      {/* Floating ambient radial orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-550 dark:text-amber-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
            {t.whyBadge}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
            {t.whyHeading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t.whyDesc}
          </p>
        </div>

        {/* Big Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display flex items-baseline gap-1">
                  <CountUp end={stat.target} suffix={stat.suffix} />
                </div>
                
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-4">
                  {stat.title}
                </h4>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-4">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Testimonial/Quote Block */}
        <div className="bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-slate-900/40 dark:to-slate-950/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest font-mono block mb-3">
              {t.schoolCollabBadge}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              {t.schoolCollabTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t.schoolCollabDesc}
            </p>
          </div>

          <a
            href="mailto:info@technovainternational.com?subject=School Affiliation and Collaboration Inquiry"
            className="w-full lg:w-auto px-8 py-4 bg-slate-900 text-white hover:bg-slate-850 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-extrabold rounded-2xl shadow-xl hover:shadow-slate-200/5 transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.schoolCollabBtn}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </a>
        </div>

      </div>
    </section>
  );
}
