import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  Trophy, 
  Globe, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  MessageSquare, 
  Share2, 
  Mail, 
  Laptop, 
  Gift, 
  Award,
  Clock
} from 'lucide-react';
import { Language } from '../translations';

interface ChampionshipDetailProps {
  lang: Language;
  onBackClick: () => void;
  onRegisterClick: () => void;
}

export default function ChampionshipDetail({ lang, onBackClick, onRegisterClick }: ChampionshipDetailProps) {
  const isAr = lang === 'ar';

  const t = {
    en: {
      backBtn: 'Back to Homepage',
      title: 'International Junior Coding Championship (IJCC) 2026',
      subtitle: 'Learn. Code. Innovate. Inspire.',
      intro: 'The International Junior Coding Championship (IJCC) 2026, organized by TechNova International (TNI), is a global online coding competition designed to inspire creativity, innovation, and problem-solving among young minds.',
      locationIntro: 'Open to students from all countries, IJCC 2026 is a fully online event — meaning participants can compete from anywhere in the world, no travel required.',
      
      // Who can participate
      whoTitle: 'Who Can Participate?',
      whoAge: 'Students aged 7–17 years',
      whoCountries: 'Open to participants from all countries',
      whoOnline: '100% online — compete from anywhere in the world',
      whoBeginner: 'Suitable for beginners through advanced learners',

      // Categories
      catTitle: 'Competition Categories',
      catSub: 'Ages are calculated to guide balanced algorithmic and structural evaluation.',
      catA: 'Category A',
      catB: 'Category B',
      catC: 'Category C',
      catD: 'Category D',
      catAgeGroup: 'Age Group',
      ages7_10: 'Ages 7–10',
      ages11_13: 'Ages 11–13',
      ages14_15: 'Ages 14–15',
      ages16_17: 'Ages 16–17',

      // Schedule
      schedTitle: 'Competition Schedule',
      schedSub: 'Please mark these vital dates to ensure eligibility and submission compliance.',
      deadlineLabel: 'Registration Deadline',
      deadlineDate: '31 August 2026',
      qualifierLabel: 'Qualifier Round',
      qualifierDate: '15 September 2026',
      finalLabel: 'Final Project Submission',
      finalDate: '31 December 2026',
      schedFooter: '*Additional dates and detailed guidelines will be shared directly with registered participants.',

      // Why Participate
      whyTitle: 'Why Participate?',
      whySub: 'Step onto the ultimate global coding stage to unlock prestige, pathways, and rewards.',
      prizes: 'Cash Prizes*',
      certificates: 'International Digital Certificates',
      awards: 'Gold, Silver & Bronze Awards',
      internships: 'Internship & Mentorship Opportunities for Top Performers*',
      recognition: 'International Recognition',
      showcase: 'A global platform to showcase your skills',
      chanceToLearn: 'A chance to learn, connect, and compete with young coders worldwide',
      prizesDisclaimer: '*Prizes, awards, internships, mentorships, and other opportunities are subject to final announcement and partner availability.',

      // Registration
      regTitle: 'Registration Details',
      regCost: 'Registration is 100% FREE.',
      regNoFee: 'There is no registration fee to take part in IJCC 2026.',
      warningHeader: 'Official Enrollment Policy',
      warningBody: 'TechNova International (TNI) is committed to accessible global education. To ensure fair opportunity, the IJCC 2026 registration, training materials, and exams are 100% free of charge. Please note that TNI does not authorize any agent, individual, or external entity to collect fees. All official registration must be submitted directly through our verified channels.',
      howToReg: 'How to register:',
      scanOrClick: 'Scan the QR code on our official materials or click the link below:',
      regButton: 'Open Official Google Form Registration',

      // WhatsApp Channel
      waTitle: 'Join Our Official WhatsApp Channel',
      waDesc: 'Stay updated with the latest announcements, deadlines, and resources by joining our official WhatsApp channel:',
      waBtn: 'Join WhatsApp Channel',

      // Spread the Word
      spreadTitle: 'Spread the Word',
      spreadDesc: 'We encourage students, parents, teachers, school principals, coding clubs, and educational institutions worldwide to share this opportunity with young innovators.',
      spreadFooter: "Together, let's inspire the next generation of technology leaders!",

      // Stay Connected
      connTitle: 'Stay Connected With Us',
      organizedBy: 'Organized by TechNova International (TNI)',
      website: 'www.technovainternational.com',
      email: 'info@technovainternational.com',
      socialHandle: 'LinkedIn, Facebook, Instagram, YouTube: @TechNovaInternational'
    },
    ar: {
      backBtn: 'العودة للصفحة الرئيسية',
      title: 'البطولة الدولية للبرمجة للناشئين (IJCC) 2026',
      subtitle: 'تعلم. برمج. ابتكر. ألهم.',
      intro: 'تعد البطولة الدولية للبرمجة للناشئين (IJCC) لعام 2026، التي تنظمها تكنونوفا الدولية (TNI)، مسابقة برمجة عالمية عبر الإنترنت مصممة لإلهام الإبداع والابتكار وحل المشكلات لدى العقول الشابة.',
      locationIntro: 'مفتوحة للطلاب من جميع الدول، وتعد بطولة IJCC 2026 حدثاً رقمياً بالكامل - مما يعني أنه يمكن للمشاركين التنافس من أي مكان في العالم دون الحاجة للسفر.',
      
      // Who can participate
      whoTitle: 'من يمكنه المشاركة؟',
      whoAge: 'الطلاب الذين تتراوح أعمارهم بين 7 و17 عاماً',
      whoCountries: 'مفتوحة للمشاركين من جميع دول العالم',
      whoOnline: 'عبر الإنترنت بنسبة 100% - شارك وتنافس من أي مكان في العالم',
      whoBeginner: 'مناسبة لجميع المستويات من المبتدئين إلى المتعلمين المتقدمين',

      // Categories
      catTitle: 'فئات المسابقة',
      catSub: 'تم تقسيم الفئات لتوجيه التقييم الخوارزمي والهيكلي المتوازن لكل فئة عمرية.',
      catA: 'الفئة أ (Category A)',
      catB: 'الفئة ب (Category B)',
      catC: 'الفئة ج (Category C)',
      catD: 'الفئة د (Category D)',
      catAgeGroup: 'الفئة العمرية',
      ages7_10: 'الأعمار 7–10 سنوات',
      ages11_13: 'الأعمار 11–13 سنة',
      ages14_15: 'الأعمار 14–15 سنة',
      ages16_17: 'الأعمار 16–17 سنة',

      // Schedule
      schedTitle: 'جدول ومواعيد المسابقة',
      schedSub: 'يرجى تسجيل هذه التواريخ الهامة لضمان الأهلية والالتزام بمواعيد تسليم المشاريع.',
      deadlineLabel: 'الموعد النهائي للتسجيل',
      deadlineDate: '31 أغسطس 2026',
      qualifierLabel: 'الجولة التأهيلية',
      qualifierDate: '15 سبتمبر 2026',
      finalLabel: 'تسليم المشروع النهائي',
      finalDate: '31 ديسمبر 2026',
      schedFooter: '*سيتم مشاركة التواريخ الإضافية والإرشادات التفصيلية مباشرة مع المشاركين المسجلين.',

      // Why Participate
      whyTitle: 'لماذا تشارك في البطولة؟',
      whySub: 'انطلق إلى المسرح العالمي الأبرز للبرمجة لفتح آفاق التميز والمسارات الأكاديمية والجوائز المرموقة.',
      prizes: 'جوائز نقدية كبرى*',
      certificates: 'شهادات رقمية دولية معتمدة',
      awards: 'ميداليات وجوائز ذهبية وفضية وبرونزية',
      internships: 'فرص تدريب عملي وتوجيه للمتميزين والأوائل*',
      recognition: 'تقدير واعتراف دولي بمستوى إنجازك',
      showcase: 'منصة عالمية لعرض مهاراتك وابتكاراتك أمام الجميع',
      chanceToLearn: 'فرصة للتعلم والتواصل والتنافس مع المبرمجين الواعدين حول العالم',
      prizesDisclaimer: '*الجوائز والمنح وفرص التدريب العملي والتوجيه تخضع للإعلان النهائي ومدى توفر الشركاء المعتمدين.',

      // Registration
      regTitle: 'تفاصيل التسجيل الرسمي',
      regCost: 'التسجيل مجاني بنسبة 100%.',
      regNoFee: 'لا توجد أي رسوم أو مبالغ مالية للمشاركة في بطولة IJCC 2026.',
      warningHeader: 'سياسة التسجيل والقبول الرسمية',
      warningBody: 'تلتزم تكنونوفا الدولية (TNI) بتوفير فرص التعليم العالمي المتميز للجميع. لضمان تكافؤ الفرص، فإن جميع مراحل التسجيل في بطولة IJCC 2026 والمواد التدريبية والامتحانات مجانية بالكامل بنسبة %100 وبدون أي رسوم. يرجى العلم بأن المؤسسة لا تفوض أي وكيل، فرد، أو جهة خارجية لتحصيل أي رسوم. يجب تقديم جميع طلبات التسجيل الرسمية مباشرة من خلال قنواتنا المعتمدة.',
      howToReg: 'كيفية التسجيل:',
      scanOrClick: 'امسح رمز الاستجابة السريعة (QR) على المواد الرسمية أو انقر على الرابط المباشر أدناه:',
      regButton: 'افتح نموذج التسجيل الرسمي عبر Google Form',

      // WhatsApp Channel
      waTitle: 'انضم إلى قناتنا الرسمية على واتساب',
      waDesc: 'ابقَ على اطلاع دائم بأحدث الإعلانات والمواعيد والموارد التقنية المتاحة من خلال الانضمام لقناتنا الرسمية:',
      waBtn: 'الانضمام إلى قناة الواتساب الرسمية',

      // Spread the Word
      spreadTitle: 'انشر الخبر وشارك الفرصة',
      spreadDesc: 'نشجع الطلاب وأولياء الأمور والمعلمين ومدراء المدارس ونوادي البرمجة والمؤسسات التعليمية في جميع أنحاء العالم على مشاركة هذه الفرصة مع المبتكرين الشباب.',
      spreadFooter: 'معاً، دعونا نلهم الجيل القادم من قادة قطاع التكنولوجيا والذكاء الاصطناعي!',

      // Stay Connected
      connTitle: 'ابقَ على اتصال وتواصل معنا',
      organizedBy: 'تنظيم وإشراف تكنونوفا الدولية (TNI)',
      website: 'www.technovainternational.com',
      email: 'info@technovainternational.com',
      socialHandle: 'لينكد إن، فيسبوك، إنستغرام، يوتيوب: @TechNovaInternational'
    }
  }[lang];

  return (
    <div className="py-24 max-w-5xl mx-auto px-6 md:px-8 relative z-10">
      
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: isAr ? 10 : -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBackClick}
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer mb-10 group"
      >
        {isAr ? <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> : <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />}
        <span>{t.backBtn}</span>
      </motion.button>

      {/* Hero Header Area */}
      <div className="text-center md:text-left mb-16 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
          🚀 IJCC 2026 Official Briefing
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-amber-200 bg-clip-text text-transparent mb-8">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8">
          <div className="md:col-span-8 text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>{t.intro}</p>
            <p className="text-sm text-slate-400">{t.locationIntro}</p>
          </div>
          <div className="md:col-span-4 bg-slate-950 border border-slate-800/80 rounded-2xl p-6 text-center space-y-3">
            <Globe className="w-10 h-10 text-blue-400 mx-auto" />
            <div className="text-lg font-bold text-white">100% Online</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Zero Travel Cost</div>
          </div>
        </div>
      </div>

      {/* Grid: Who can participate & Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Section: Who Can Participate */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span>{t.whoTitle}</span>
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{t.whoAge}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{t.whoCountries}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{t.whoOnline}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{t.whoBeginner}</span>
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-800/60 mt-6 flex items-center gap-2.5 text-xs font-mono text-slate-500">
            <Laptop className="w-4 h-4 text-slate-400" />
            <span>Recommended: Laptop or Desktop + Web Connection</span>
          </div>
        </motion.div>

        {/* Section: Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold font-display text-white mb-2 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400" />
            <span>{t.catTitle}</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">{t.catSub}</p>

          <div className="space-y-3">
            {[
              { cat: t.catA, ages: t.ages7_10, color: 'border-l-blue-500' },
              { cat: t.catB, ages: t.ages11_13, color: 'border-l-amber-500' },
              { cat: t.catC, ages: t.ages14_15, color: 'border-l-rose-500' },
              { cat: t.catD, ages: t.ages16_17, color: 'border-l-emerald-500' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-950/80 border border-slate-800 border-l-4 ${item.color} rounded-2xl p-4 flex items-center justify-between`}
              >
                <div className="font-bold text-white text-sm">{item.cat}</div>
                <div className="px-3 py-1 bg-slate-900 rounded-lg text-xs font-semibold text-slate-300 border border-slate-800/60">
                  {item.ages}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section: Competition Schedule */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-10 mb-12"
      >
        <div className="max-w-xl mb-8">
          <h3 className="text-2xl font-bold font-display text-white mb-2 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-400" />
            <span>{t.schedTitle}</span>
          </h3>
          <p className="text-sm text-slate-400">{t.schedSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {[
            { label: t.deadlineLabel, date: t.deadlineDate, desc: 'Secure slot eligibility', icon: <Clock className="w-5 h-5 text-amber-400" /> },
            { label: t.qualifierLabel, date: t.qualifierDate, desc: 'First algorithmic round', icon: <Laptop className="w-5 h-5 text-blue-400" /> },
            { label: t.finalLabel, date: t.finalDate, desc: 'Project submission portal closes', icon: <Trophy className="w-5 h-5 text-emerald-400" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-6 relative flex flex-col justify-between shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-slate-600 uppercase font-bold">Milestone 0{idx+1}</span>
              </div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider font-mono">{item.label}</h4>
              <p className="text-xl font-extrabold text-white mt-1.5 mb-2">{item.date}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[11px] font-mono text-slate-500 mt-6 italic">
          {t.schedFooter}
        </p>
      </motion.div>

      {/* Section: Why Participate */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-10 mb-12"
      >
        <div className="max-w-xl mb-8 text-left">
          <h3 className="text-2xl font-bold font-display text-white mb-2 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <span>{t.whyTitle}</span>
          </h3>
          <p className="text-sm text-slate-400">{t.whySub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: t.prizes, icon: <Gift className="w-5 h-5 text-rose-400" /> },
            { title: t.certificates, icon: <Award className="w-5 h-5 text-blue-400" /> },
            { title: t.awards, icon: <Trophy className="w-5 h-5 text-amber-400" /> },
            { title: t.internships, icon: <Users className="w-5 h-5 text-purple-400" /> },
            { title: t.recognition, icon: <Globe className="w-5 h-5 text-emerald-400" /> },
            { title: t.showcase, icon: <Laptop className="w-5 h-5 text-cyan-400" /> },
            { title: t.chanceToLearn, icon: <MessageSquare className="w-5 h-5 text-teal-400" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-950/70 border border-slate-850/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                {item.icon}
              </div>
              <span className="text-slate-200 text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>

        <p className="text-[11px] font-mono text-slate-500 mt-6 italic">
          {t.prizesDisclaimer}
        </p>
      </motion.div>

      {/* Section: Registration & Security Alert */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Reassuring Enrollment Policy notice */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-4">
              <ShieldCheck className="w-6 h-6 shrink-0 text-emerald-400" />
              <span className="text-sm font-mono uppercase tracking-wider text-slate-200">{t.warningHeader}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {t.warningBody}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-800/60">
            <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">{t.regCost}</span>
            <p className="text-xs text-slate-400 mt-1">{t.regNoFee}</p>
          </div>
        </motion.div>

        {/* Action Form Direct */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-gradient-to-br from-blue-950/40 to-slate-900/40 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">
              {t.regTitle}
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              {t.howToReg} <span className="text-amber-400 font-bold">{t.regCost}</span>
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              {t.scanOrClick}
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://forms.gle/HAP7HhKNG9urFFH96"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-2 group cursor-pointer text-sm"
            >
              <span>{t.regButton}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <button
              onClick={onRegisterClick}
              className="w-full py-3.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 font-bold rounded-2xl transition-all duration-200 text-xs cursor-pointer"
            >
              Pre-Register via Admissions Board
            </button>
          </div>
        </motion.div>
      </div>

      {/* Section: WhatsApp Banner Channel */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-950/40 to-slate-900/40 border border-emerald-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
      >
        <div className="max-w-2xl text-left">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-3 font-mono uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>Stay Tuned Live</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {t.waTitle}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t.waDesc}
          </p>
        </div>

        <a
          href="https://whatsapp.com/channel/0029Vb8aju5J93wN93AVPE00"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/5 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer text-sm w-full md:w-auto"
        >
          <MessageSquare className="w-5 h-5 fill-white/10 shrink-0" />
          <span>{t.waBtn}</span>
        </a>
      </motion.div>

      {/* Spread the Word Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border border-slate-800/80 rounded-3xl p-8 md:p-12 text-center bg-slate-950/40 backdrop-blur-sm relative overflow-hidden mb-12"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500" />
        <Share2 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-display text-white mb-4">
          {t.spreadTitle}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
          {t.spreadDesc}
        </p>
        <p className="text-amber-400 font-semibold text-base">
          {t.spreadFooter}
        </p>
      </motion.div>

      {/* Stay Connected Footer Details */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-950 border border-slate-900 rounded-3xl p-8"
      >
        <h3 className="text-lg font-bold text-white mb-6 font-display border-b border-slate-900 pb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-slate-400" />
          <span>{t.connTitle}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <span className="text-slate-500 text-xs font-mono block uppercase tracking-widest mb-1">Affiliation</span>
            <span className="font-bold text-slate-300">{t.organizedBy}</span>
          </div>
          <div>
            <span className="text-slate-500 text-xs font-mono block uppercase tracking-widest mb-1">Official Site</span>
            <a href="https://www.technovainternational.com" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-400 hover:underline">{t.website}</a>
          </div>
          <div>
            <span className="text-slate-500 text-xs font-mono block uppercase tracking-widest mb-1">Direct Desk</span>
            <a href="mailto:info@technovainternational.com" className="font-bold text-blue-400 hover:underline">{t.email}</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-xs text-slate-500 font-mono">
          {t.socialHandle}
        </div>
      </motion.div>

    </div>
  );
}
