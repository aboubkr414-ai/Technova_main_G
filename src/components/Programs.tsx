import { motion } from 'motion/react';
import { Terminal, Brain, Construction, Atom, Workflow, Trophy, Calendar, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';

interface ProgramsProps {
  onRegisterClick: () => void;
  lang: Language;
}

export default function Programs({ onRegisterClick, lang }: ProgramsProps) {
  const t = translations[lang];

  const programsList = [
    {
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      title: t.prog1Title,
      category: t.prog1Category,
      desc: t.prog1Desc,
      duration: t.prog1Duration,
      level: t.prog1Level,
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30',
    },
    {
      icon: <Brain className="w-6 h-6 text-amber-400" />,
      title: t.prog2Title,
      category: t.prog2Category,
      desc: t.prog2Desc,
      duration: t.prog2Duration,
      level: t.prog2Level,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
    },
    {
      icon: <Construction className="w-6 h-6 text-rose-400" />,
      title: t.prog3Title,
      category: t.prog3Category,
      desc: t.prog3Desc,
      duration: t.prog3Duration,
      level: t.prog3Level,
      color: 'from-rose-500/20 to-red-500/10 border-rose-500/30',
    },
    {
      icon: <Atom className="w-6 h-6 text-emerald-400" />,
      title: t.prog4Title,
      category: t.prog4Category,
      desc: t.prog4Desc,
      duration: t.prog4Duration,
      level: t.prog4Level,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
    },
    {
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      title: t.prog5Title,
      category: t.prog5Category,
      desc: t.prog5Desc,
      duration: t.prog5Duration,
      level: t.prog5Level,
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
    },
    {
      icon: <Trophy className="w-6 h-6 text-gold-400" />,
      title: t.prog6Title,
      category: t.prog6Category,
      desc: t.prog6Desc,
      duration: t.prog6Duration,
      level: t.prog6Level,
      color: 'from-amber-500/35 to-yellow-500/10 border-amber-500/50',
      badge: t.prog6Badge,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-[#020617] relative bg-grid-white">
      {/* Grid line divider styles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
            {t.progBadge}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            {t.progHeading}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t.progDesc}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative bg-gradient-to-br ${prog.color} bg-slate-950/80 hover:bg-slate-900/40 backdrop-blur-md border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/5 hover:-translate-y-1.5`}
            >
              {/* Custom border lighting effects */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {prog.icon}
                  </div>
                  {prog.badge ? (
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold rounded-full font-mono uppercase tracking-widest animate-pulse">
                      {prog.badge}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono tracking-wide">
                      {prog.category}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-200">
                  {prog.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {prog.desc}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-900 pt-6 mb-6 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 justify-end">
                    <Sparkles className="w-4 h-4 text-slate-500" />
                    <span>{prog.level}</span>
                  </div>
                </div>

                <a
                  href="mailto:info@technovainternational.com?subject=Inquiry about TechNova Programs"
                  className="w-full py-3 bg-slate-950 hover:bg-white text-slate-400 hover:text-slate-950 font-bold rounded-2xl text-xs border border-slate-800 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>{t.progInquireBtn}</span>
                  <span className={`group-hover/btn:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            {t.progAdmissionsHelp}{' '}
            <a
              href="mailto:info@technovainternational.com?subject=Consultation with Admissions Panel"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
            >
              {t.progConsultBtn}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
