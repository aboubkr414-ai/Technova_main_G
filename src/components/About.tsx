import { motion } from 'motion/react';
import { Code2, BrainCircuit, Cpu, Sparkles, Trophy, Globe } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: 'Advanced Coding',
      desc: 'Mastery over industrial programming languages including Python, JavaScript, and C++, focusing on programmatic logic, design patterns, and application engineering.',
      badge: 'Logic & Architecture',
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-amber-400" />,
      title: 'Artificial Intelligence',
      desc: 'Hands-on training with Neural Networks, Large Language Models (LLMs), Machine Learning pipelines, and intelligent system integrations.',
      badge: 'State-of-the-Art',
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-400" />,
      title: 'Robotics Engineering',
      desc: 'Designing physical systems, autonomous navigation firmware, micro-controller interfaces, and mechanical automation platforms.',
      badge: 'Hardware Automation',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Innovation Workshops',
      desc: 'Fostering design-thinking processes and creative engineering methods to prototype actionable solutions for contemporary problems.',
      badge: 'Design Thinking',
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: 'Future Skills',
      desc: 'Cultivating highly-demanded capabilities like critical reasoning, computational analysis, leadership, and professional presentation.',
      badge: 'Career Readiness',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Global Opportunities',
      desc: 'Opening pathways for international championships, research programs, academic scholarships, and high-value technical internships.',
      badge: 'Global Mobility',
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
              About TechNova
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Cultivating the World's Next Tech Leaders.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              TechNova International stands at the forefront of global STEM education. We bridging the gap between standard school curricula and modern enterprise requirements, delivering rigorous, hands-on, and highly creative learning pathways.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our mission is to inspire, train, and accelerate students through intensive programs in <strong className="text-white">Coding</strong>, <strong className="text-white">AI</strong>, <strong className="text-white">Robotics</strong>, and <strong className="text-white">Competitive Intelligence</strong>, enabling them to lead projects that change the world.
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
                <span className="font-mono text-[10px] uppercase tracking-widest">TechNova Core Pillar</span>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
