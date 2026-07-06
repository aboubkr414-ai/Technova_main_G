import { motion } from 'motion/react';
import { Code2, BrainCircuit, Cpu, Sparkles, Trophy, Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: t.pillar1Title,
      desc: t.pillar1Desc,
      badge: t.pillar1Badge,
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-amber-400" />,
      title: t.pillar2Title,
      desc: t.pillar2Desc,
      badge: t.pillar2Badge,
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-400" />,
      title: t.pillar3Title,
      desc: t.pillar3Desc,
      badge: t.pillar3Badge,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: t.pillar4Title,
      desc: t.pillar4Desc,
      badge: t.pillar4Badge,
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: t.pillar5Title,
      desc: t.pillar5Desc,
      badge: t.pillar5Badge,
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: t.pillar6Title,
      desc: t.pillar6Desc,
      badge: t.pillar6Badge,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden bg-grid-blue">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
              {t.aboutBadge}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              {t.aboutHeading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {t.aboutDesc1}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.aboutDesc2}
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase bg-slate-950 border border-slate-900 px-2.5 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-widest">{t.pillarCoreLabel}</span>
                <span className={`text-amber-500 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
