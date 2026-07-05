import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, FileCheck, Trophy, Sparkles, ArrowRight, Hourglass } from 'lucide-react';

interface CompetitionProps {
  onRegisterClick: () => void;
}

export default function Competition({ onRegisterClick }: CompetitionProps) {
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
      title: 'Global Eligibility',
      desc: 'Open to students aged 7 to 17 from all countries. Compete on a global stage with worldwide recognition.',
    },
    {
      icon: <Hourglass className="w-6 h-6 text-amber-400" />,
      title: 'Competitive Coding',
      desc: 'Evaluate machine learning pipelines, prompt-engineering challenges, structural codebases, and hardware automation systems.',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Global Recognition',
      desc: 'Earn high-prestige, internationally accredited certificates validating your technical achievements with partners.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-gold-400" />,
      title: 'Incentive & Pathways',
      desc: 'Win large cash prizes, academic scholarships, and real technical internship opportunities with elite global organizations.',
    },
  ];

  const timelineStages = [
    {
      stage: 'Stage 01',
      title: 'Registration Deadline',
      date: '31st August 2026',
      desc: 'Final date to submit application profiles and secure eligibility slots through official Google Form and portals.',
    },
    {
      stage: 'Stage 02',
      title: 'Qualifier Round',
      date: '15th November 2026',
      desc: 'Intense algorithmic challenge matrices, real-time code optimization rounds, and localized online evaluation boards.',
    },
    {
      stage: 'Stage 03',
      title: 'Final Project Submission',
      date: '31st December 2026',
      desc: 'Final submission deadline for validated codebases, physical control rigs, and presentation recordings.',
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
              The Flagship Event
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              International Junior Coding Championship 2026
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              The IJCC is the world’s premier competitive technical stage for students aged 7 to 17 from all countries. Supported by elite global software corporations, the championship challenges young innovators to engineer, iterate, and present high-performance software projects.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Unlock extraordinary opportunities including direct cash prizes, educational scholarships, tech internship opportunities, and official certified credentials with true global recognition. Join thousands of young leaders from across the globe in rewriting the future of AI, coding, and robotics.
            </p>
          </div>

          <div className="lg:col-span-5">
            {/* Real-time Digital Countdown clock */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 relative shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-spin" />
                <span>Registrations Open</span>
              </div>
              
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest font-mono mb-6 text-center">
                Countdown to Kickoff
              </h4>

              <div className="grid grid-cols-4 gap-3 text-center mb-8">
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">Days</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">Hrs</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-1">Mins</div>
                </div>
                <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl text-amber-400">
                  <div className="text-3xl md:text-4xl font-extrabold font-display">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-amber-500 uppercase tracking-wider font-mono mt-1">Secs</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 justify-center mb-6 border-b border-slate-800 pb-6">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Deadline: August 31, 2026 • Registration is Global & Online</span>
              </div>

              <a
                href="https://forms.gle/HAP7HhKNG9urFFH96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white hover:bg-slate-100 text-slate-950 font-extrabold rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Pre-Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
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
            The Championship Roadmap
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
