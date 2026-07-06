import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, 
  Sparkles, 
  ArrowRight, 
  Info, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  ShieldAlert, 
  Calendar, 
  Users, 
  Trophy, 
  MessageSquare,
  Globe2,
  Share2
} from 'lucide-react';
import { Language, translations } from '../translations';

// Using exact replicas of the user-provided brochures dynamically in activeTab tabs

interface ChampionshipPromoProps {
  lang: Language;
  onRegisterClick: () => void;
}

type FlyerTab = 'blue' | 'orange' | 'teal' | 'arabic';

export default function ChampionshipPromo({ lang, onRegisterClick }: ChampionshipPromoProps) {
  const [activeTab, setActiveTab] = useState<FlyerTab>(lang === 'ar' ? 'arabic' : 'blue');
  const t = translations[lang];

  // Links as requested from the flyer images
  const GOOGLE_FORM_URL = 'https://forms.gle/HAP7HhKNG9urFFH96';
  const WHATSAPP_URL = 'https://whatsapp.com/channel/0029Vb8aju5J93wN93AVPE00';

  const tabs = [
    { id: 'blue', name: 'English - Blue Flagship' },
    { id: 'orange', name: 'English - Dark Orange' },
    { id: 'teal', name: 'English - Modern Teal' },
    { id: 'arabic', name: 'العربية - النسخة الرسمية' },
  ];

  return (
    <section id="advertisements" className="py-24 bg-slate-50 dark:bg-[#050b1a] border-y border-slate-200 dark:border-slate-900/60 relative overflow-hidden">
      {/* Absolute ambient lights (Matching our premium cosmic style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 dark:text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Official Media & Advertisements' : 'المنشورات والإعلانات الرسمية للبطولة'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            {lang === 'en' ? 'Official Championship Flyers' : 'منشورات وملصقات البطولة الرسمية'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Explore the high-fidelity replicas of our official campaign advertisements. These materials are distributed globally across participating schools, STEM academies, and parent-teacher boards.'
              : 'استكشف النسخ عالية الدقة من الملصقات الإعلانية الرسمية لحملتنا. يتم توزيع هذه المواد عالمياً عبر المدارس المشاركة، وأكاديميات العلوم والتكنولوجيا، ومجالس أولياء الأمور.'}
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as FlyerTab)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider font-mono border transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-amber-500 border-transparent text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Interactive Flyer Renderer */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Flyer Interactive Mock / Layout Simulator */}
          <div className="xl:col-span-8">
            <AnimatePresence mode="wait">
              {/* Flyer Wrapper */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.4 }}
                className={`w-full bg-slate-900 border-4 rounded-[2.5rem] shadow-2xl relative overflow-hidden select-none flex flex-col ${
                  activeTab === 'blue' ? 'border-blue-500/30' :
                  activeTab === 'orange' ? 'border-amber-500/30' :
                  activeTab === 'teal' ? 'border-emerald-500/30' : 'border-purple-500/30'
                }`}
              >
                {/* Embedded Promotional Header Image */}
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 z-10" />
                  <img 
                    src={
                      activeTab === 'blue' ? '/assets/images/brochure_english_blue_1783362443667.jpg' :
                      activeTab === 'orange' ? '/assets/images/brochure_english_dark_1783362457228.jpg' :
                      activeTab === 'teal' ? '/assets/images/brochure_english_light_1783362466721.jpg' :
                      '/assets/images/brochure_arabic_teal_1783362479362.jpg'
                    } 
                    alt="Championship Advertisement Poster"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Badges */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 bg-blue-600/95 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
                      <Globe2 className="w-4 h-4 text-amber-300 animate-spin-slow" />
                      <span>{activeTab === 'arabic' ? 'البطولة العالمية المعتمدة' : '100% ONLINE • GLOBAL STAGE'}</span>
                    </div>
                    <div className="bg-amber-500 text-slate-950 font-black px-3.5 py-1.5 rounded-lg text-[10px] tracking-widest uppercase shadow-md">
                      {activeTab === 'arabic' ? 'التسجيل مفتوح الآن' : 'REGISTRATIONS OPEN'}
                    </div>
                  </div>
                </div>

                {/* Flyer Leaflet Inner Container */}
                <div className={`p-6 md:p-10 space-y-10 flex-1 ${activeTab === 'arabic' ? 'text-right' : 'text-left'}`} dir={activeTab === 'arabic' ? 'rtl' : 'ltr'}>
                  
                  {/* Headline Group */}
                  <div className="space-y-3 border-b border-slate-800/80 pb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs">TN</div>
                      <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-slate-400">
                        {activeTab === 'arabic' ? 'تكنونوفا الدولية للتعليم المتميز' : 'TECHNOVA INTERNATIONAL'}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight">
                      {activeTab === 'arabic' ? (
                        <>
                          البطولة الدولية <span className="text-amber-400">لبرمجة الناشئة</span> <span className="text-blue-400">IJCC 2026</span>
                        </>
                      ) : (
                        <>
                          INTERNATIONAL <span className="text-blue-400">JUNIOR CODING</span> <span className="text-amber-400">CHAMPIONSHIP</span>
                        </>
                      )}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed">
                      {activeTab === 'arabic' 
                        ? 'مسابقة برمجية عالمية عبر الإنترنت تهدف إلى إشعال شرارة الإبداع، تشجيع الابتكار، وتطوير التفكير المنطقي وحل المشكلات الهندسية لدى العقول الشابة.'
                        : 'A premier competitive global technical stage designed to inspire creativity, computational innovation, and architectural problem-solving among young students.'
                      }
                    </p>
                  </div>

                  {/* Core Flyer Body Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Column A: Categories & Audience */}
                    <div className="space-y-6">
                      <h4 className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 ${
                        activeTab === 'blue' ? 'text-blue-400' :
                        activeTab === 'orange' ? 'text-amber-400' :
                        activeTab === 'teal' ? 'text-emerald-400' : 'text-purple-400'
                      }`}>
                        <Users className="w-4 h-4" />
                        <span>{activeTab === 'arabic' ? 'فئات المنافسة والاشتراك' : 'COMPETITION CATEGORIES'}</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { cat: 'A', ages: activeTab === 'arabic' ? 'سن 7 - 10' : 'Ages 7–10', color: 'from-blue-600/20 to-blue-500/5 border-blue-500/20', t: 'blue' },
                          { cat: 'B', ages: activeTab === 'arabic' ? 'سن 11 - 13' : 'Ages 11–13', color: 'from-emerald-600/20 to-emerald-500/5 border-emerald-500/20', t: 'emerald' },
                          { cat: 'C', ages: activeTab === 'arabic' ? 'سن 14 - 15' : 'Ages 14–15', color: 'from-amber-600/20 to-amber-500/5 border-amber-500/20', t: 'amber' },
                          { cat: 'D', ages: activeTab === 'arabic' ? 'سن 16 - 17' : 'Ages 16–17', color: 'from-rose-600/20 to-rose-500/5 border-rose-500/20', t: 'rose' }
                        ].map((c) => (
                          <div key={c.cat} className={`bg-gradient-to-br ${c.color} border p-3 rounded-xl flex items-center gap-3`}>
                            <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-black text-white text-sm">
                              {c.cat}
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-500 font-bold uppercase font-mono">{activeTab === 'arabic' ? 'الفئة' : 'Category'} {c.cat}</div>
                              <div className="text-xs font-black text-white font-sans">{c.ages}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Why Participate Bullet list */}
                      <div className="space-y-3 pt-2">
                        <h5 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                          {activeTab === 'arabic' ? 'لماذا يجب المشاركة؟' : 'WHY PARTICIPATE?'}
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-400">
                          {[
                            activeTab === 'arabic' ? 'جوائز مالية كبرى ومنح دراسية' : 'Grand Cash Prizes & Academic Scholarships',
                            activeTab === 'arabic' ? 'شهادات رقمية دولية معتمدة من TNI' : 'Official International Digital Certificates',
                            activeTab === 'arabic' ? 'فرص تدريب وإرشاد تقني للمتفوقين' : 'Tech Internships & Mentorship for top performers',
                            activeTab === 'arabic' ? 'بناء وتطوير مهارات تنافسية للمستقبل' : 'Learn, network & compete with global peers'
                          ].map((b, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Column B: Schedule Timeline & Channels */}
                    <div className="space-y-6">
                      <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{activeTab === 'arabic' ? 'الجدول الزمني للبطولة' : 'COMPETITION SCHEDULE'}</span>
                      </h4>

                      <div className="space-y-3.5">
                        {[
                          { label: activeTab === 'arabic' ? 'الموعد النهائي للتسجيل' : 'Registration Deadline', date: '31 August 2026', color: 'border-blue-500/20 bg-blue-500/5 text-blue-400' },
                          { label: activeTab === 'arabic' ? 'الجولة التأهيلية للمقبولين' : 'Qualifier Round', date: '15 September 2026', color: 'border-amber-500/20 bg-amber-500/5 text-amber-400' },
                          { label: activeTab === 'arabic' ? 'تسليم المشروع النهائي والتقييم' : 'Final Project Submission', date: '31 December 2026', color: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400' }
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-start gap-3 border-l-2 border-slate-800 pl-3.5 rtl:border-l-0 rtl:border-r-2 rtl:pr-3.5 pb-1">
                            <div className="space-y-0.5">
                              <div className="text-[10px] text-slate-500 uppercase font-mono font-bold">{s.label}</div>
                              <div className="text-xs font-black text-white">{s.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Official Stamp / Organized Info */}
                      <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl space-y-1">
                        <div className="text-[10px] font-mono text-slate-500 font-extrabold uppercase">
                          {activeTab === 'arabic' ? 'الجهة المنظمة الرسمية' : 'OFFICIAL ORGANIZING BODY'}
                        </div>
                        <div className="text-xs font-black text-white">TechNova International Educational Trust (TNI)</div>
                        <div className="text-[10px] text-slate-500 font-mono">info@technovainternational.org • ISO 9001:2015</div>
                      </div>
                    </div>

                  </div>

                  {/* Anti-Scam Verification Notice on the Flyer itself */}
                  <div className="bg-rose-500/10 border border-rose-500/25 p-4 rounded-2xl flex items-start gap-3 text-rose-200">
                    <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-xs">
                      <div className="font-extrabold text-rose-400 uppercase tracking-wide">
                        {activeTab === 'arabic' ? 'تنبيه أمني هام جداً' : 'CRITICAL SECURITY ANNOUNCEMENT'}
                      </div>
                      <p className="leading-relaxed text-[11px] font-medium text-slate-300">
                        <strong className="text-white">
                          {activeTab === 'arabic' ? 'التسجيل في هذه البطولة مجاني 100% وبدون أي رسوم.' : 'Registration is 100% FREE. There is no enrollment fee.'}
                        </strong>{' '}
                        {activeTab === 'arabic' 
                          ? 'يرجى عدم دفع أي أموال أو مبالغ لأي فرد يدعي تمثيل تكنونوفا الدولية. لا نفوض أي جهة لجمع أموال نيابة عنا.'
                          : 'Please do not pay anyone claiming to represent TechNova International. TNI does not authorize any entity to collect money on our behalf.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* QR Code replicas inside the flyer layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                    
                    {/* Register Now QR */}
                    <div className="bg-slate-950 border border-slate-800/60 p-4 rounded-2xl flex items-center gap-4">
                      {/* Interactive CSS Mock QR Code */}
                      <div className="w-16 h-16 bg-white rounded-lg p-1.5 shrink-0 flex flex-wrap relative overflow-hidden group/qr">
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                        <div className="w-full h-full border border-slate-950 flex flex-wrap justify-between p-0.5">
                          {/* Anchor Corners */}
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          <div className="w-full h-1" />
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          {/* Inner pixels */}
                          <div className="w-2.5 h-2.5 bg-slate-950 rounded-sm m-0.5" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-blue-400 font-extrabold uppercase">{activeTab === 'arabic' ? 'بوابة التسجيل' : 'REGISTER PORTAL'}</div>
                        <div className="text-xs font-black text-white">{activeTab === 'arabic' ? 'مسح الرمز للتسجيل' : 'Scan QR to Register'}</div>
                        <a 
                          href={GOOGLE_FORM_URL} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[11px] text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-mono hover:underline"
                        >
                          <span>forms.gle/HAP7Hh...</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Channel QR */}
                    <div className="bg-slate-950 border border-slate-800/60 p-4 rounded-2xl flex items-center gap-4">
                      {/* Interactive CSS Mock QR Code with WhatsApp green icon */}
                      <div className="w-16 h-16 bg-white rounded-lg p-1.5 shrink-0 flex items-center justify-center relative overflow-hidden group/qr">
                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                        <div className="w-full h-full border border-slate-950 flex flex-wrap justify-between p-0.5 relative">
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          <div className="w-full h-1" />
                          <div className="w-4 h-4 bg-slate-950 border border-white" />
                          {/* Center WhatsApp indicator */}
                          <div className="absolute inset-0 m-auto w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase">{activeTab === 'arabic' ? 'قناة الواتساب' : 'WHATSAPP CHANNEL'}</div>
                        <div className="text-xs font-black text-white">{activeTab === 'arabic' ? 'مسح رمز الانضمام' : 'Scan QR to Join'}</div>
                        <a 
                          href={WHATSAPP_URL} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[11px] text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-mono hover:underline"
                        >
                          <span>whatsapp.com/ch...</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Flyer Action Panels & Quick Links */}
          <div className="xl:col-span-4 space-y-6">
            
            {/* Quick Promo Card */}
            <div className="bg-white/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <QrCode className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {lang === 'en' ? 'Direct Application Links' : 'روابط التقديم والاتصال المباشرة'}
                  </h4>
                  <p className="text-slate-500 text-xs">
                    {lang === 'en' ? 'Scan on flyer or click here to redirect' : 'امسح الرمز من الملصق أو انقر للتحويل'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer text-sm animate-pulse"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-200" />
                    <span>{lang === 'en' ? 'Open Google Registration Form' : 'فتح نموذج التسجيل من جوجل'}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer text-sm"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-200 fill-emerald-200/15" />
                    <span>{lang === 'en' ? 'Join WhatsApp Broadcast Channel' : 'انضمام لقناة بث الواتساب الرسمية'}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Campaign Poster Card Advertisement */}
            <div className="bg-white/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden space-y-4">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <span>{lang === 'en' ? 'Ad Campaign Details' : 'تفاصيل الحملة الإعلانية'}</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {lang === 'en' 
                  ? 'Our promotional posters are ISO 9001:2015 accredited materials for educational outreach. You can share these flyers in your classrooms, schools, and community networks to help kids discover competitive coding.'
                  : 'منشوراتنا الإعلانية هي مواد معتمدة من الأيزو ISO 9001:2015 للتوعية التعليمية. يمكنك مشاركة هذه المنشورات في فصولك الدراسية ومدارسك وشبكاتك المجتمعية لمساعدة الأطفال على اكتشاف البرمجة التنافسية.'}
              </p>

              <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{lang === 'en' ? 'Accredited STEM Event' : 'حدث معتمد علمياً وتكنولوجياً'}</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 leading-normal text-[11px]">
                  {lang === 'en'
                    ? 'Registration, guidelines, and qualifier submissions are 100% free of charge. Selected grand finalists receive exclusive fully-funded certificates and awards.'
                    : 'التسجيل والإرشادات وتقديمات التصفيات مجانية بنسبة 100%. يحصل المتأهلون النهائيون المختارون على شهادات وجوائز ممولة بالكامل.'}
                </div>
              </div>

              {/* Share Flyer Action */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'IJCC 2026 Coding Championship',
                      text: 'Join the world\'s leading coding championship for young innovators aged 7 to 17!',
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert(lang === 'en' ? 'Championship link copied to clipboard!' : 'تم نسخ رابط البطولة إلى الحافظة!');
                  }
                }}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider font-mono"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === 'en' ? 'Share Tournament Links' : 'مشاركة روابط البطولة والمسابقة'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
