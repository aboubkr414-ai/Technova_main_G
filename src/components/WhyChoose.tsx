import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Trophy, Landmark, Users2, ArrowRight } from 'lucide-react';

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
}

export default function WhyChoose({ onRegisterClick }: WhyChooseProps) {
  const stats = [
    {
      icon: <Users2 className="w-5 h-5 text-blue-400" />,
      title: 'Students Trained',
      target: 1000,
      suffix: '+',
      desc: 'Nurtured into global technologists, competitive programmers, and future engineering candidates.',
    },
    {
      icon: <Landmark className="w-5 h-5 text-rose-400" />,
      title: 'Affiliate Schools',
      target: 50,
      suffix: '+',
      desc: 'Collaborative curriculum integrations across elite international secondary colleges and private campuses.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: 'Countries Active',
      target: 10,
      suffix: '+',
      desc: 'Delivering world-class technical coaching across multiple time zones and global regions.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Student Portfolios',
      target: 100,
      suffix: '+',
      desc: 'Fully realized hardware automation frameworks, machine learning models, and complex application codebases.',
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-[#020617] relative bg-grid-white">
      {/* Decorative center spotlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-slate-900 via-slate-800 to-transparent pointer-events-none" />

      {/* Floating ambient radial orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
            Proven Performance Indicators
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
            Why Partner with TechNova?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our numbers describe our passion. We maintain the highest instructional precision and structural support matrices to maximize student achievements.
          </p>
        </div>

        {/* Big Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="p-3 bg-slate-900 border border-slate-800/60 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                
                <div className="text-4xl md:text-5xl font-extrabold text-white font-display flex items-baseline gap-1">
                  <CountUp end={stat.target} suffix={stat.suffix} />
                </div>
                
                <h4 className="text-sm font-semibold text-slate-300 mt-2 mb-4">
                  {stat.title}
                </h4>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-900 pt-4">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Testimonial/Quote Block */}
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-950/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono block mb-3">
              Official Collaboration Initiative
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
              Bring TechNova to Your School Campus
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We collaborate with forward-thinking school administrators, academic partners, and sponsors worldwide to offer custom-tailored coding labs, teacher coaching, and priority entry to the International Junior Coding Championship (IJCC).
            </p>
          </div>

          <a
            href="mailto:info@technovainternational.com?subject=School Affiliation and Collaboration Inquiry"
            className="w-full lg:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 font-extrabold rounded-2xl shadow-xl hover:shadow-slate-200/5 transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Affiliate with TechNova</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
