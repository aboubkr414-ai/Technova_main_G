import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ChevronDown, Award, Play } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
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
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#020617] bg-grid-white"
    >
      {/* Immersive radial gradient glow (Stripe/Vercel style) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
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

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 relative z-10 w-full flex flex-col items-center text-center">
        {/* Championship Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-8 hover:bg-blue-500/15 transition-colors cursor-default"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono uppercase tracking-wider text-[10px]">
            International Junior Coding Championship 2026
          </span>
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
        </motion.div>

        {/* Large Typography Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-white"
        >
          TechNova <br />
          <span className="bg-gradient-to-r from-blue-400 via-white to-amber-200 bg-clip-text text-transparent">
            International
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed"
        >
          Empowering the Next Generation of Innovators through world-class{' '}
          <span className="text-white font-medium">Coding</span>,{' '}
          <span className="text-white font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-white font-medium">Robotics</span>, and Global Competitions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://forms.gle/HAP7HhKNG9urFFH96"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-2xl font-bold text-base shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Learn More</span>
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb8aju5J93wN93AVPE00"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-emerald-500/10" />
            <span>Official WhatsApp Channel</span>
          </a>
        </motion.div>

        {/* Interactive Highlight Figures preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-900/80 pt-10 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-white">1000+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Students Trained</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-white">50+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Schools Partnered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-white">10+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Countries Active</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-white">100+</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Innovative Projects</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors hidden md:flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore TechNova</span>
          <ChevronDown className="w-4 h-4 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
}
