import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Global Programs',
      links: [
        { name: 'Computer Science Core', href: '#programs' },
        { name: 'Applied AI & Networks', href: '#programs' },
        { name: 'Robotics Engineering', href: '#programs' },
        { name: 'Global STEM Fundamentals', href: '#programs' },
        { name: 'Creative Innovation Labs', href: '#programs' },
      ],
    },
    {
      title: 'Championship (IJCC)',
      links: [
        { name: 'About IJCC 2026', href: '#ijcc' },
        { name: 'National Selection Rounds', href: '#ijcc' },
        { name: 'Championship Guidelines', href: '#ijcc' },
        { name: 'Awards & Scholarships', href: '#ijcc' },
        { name: 'Previous Winners Portfolio', href: '#ijcc' },
      ],
    },
    {
      title: 'Organization Links',
      links: [
        { name: 'About Our Mission', href: '#about' },
        { name: 'Board of Governors', href: '#about' },
        { name: 'Research Affiliations', href: '#about' },
        { name: 'Academic Partners', href: '#why-choose' },
        { name: 'Global Impact Summary', href: '#why-choose' },
      ],
    },
  ];

  return (
    <footer className="bg-[#020617] border-t border-slate-900/80 pt-20 pb-10 relative overflow-hidden">
      {/* Visual highlights */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Upper section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Logo Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                <span className="font-display text-lg tracking-wider">TN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  TechNova <span className="text-amber-400 font-normal">International</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase -mt-0.5">
                  Global Education
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mt-2">
              Empowering the Next Generation of Innovators through world-class Computer Science, Artificial Intelligence, Robotics, and International Competitive programs.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 9001:2015 Accredited Organization</span>
            </div>
          </div>

          {/* Nav Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((sec) => (
              <div key={sec.title} className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
                  {sec.title}
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {sec.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Lower section (Copyright & Regulations) */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600 font-mono">
          <div>
            <span>© {currentYear} TechNova International Educational Trust. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Charter</a>
            <a href="#about" className="hover:text-slate-400 transition-colors">Affiliate Terms</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Support Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
