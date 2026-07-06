import { motion } from 'motion/react';
import { Mail, Shield, Award, BookOpen, Users, Cpu, Briefcase } from 'lucide-react';
import { Language, translations } from '../translations';

interface TeamProps {
  lang: Language;
}

export default function Team({ lang }: TeamProps) {
  const t = translations[lang];

  // Team data localized inside the component to keep translation self-contained
  const teamCategories = [
    {
      id: 'leadership',
      titleEn: 'Executive Leadership',
      titleAr: 'القيادة التنفيذية',
      icon: <Shield className="w-5 h-5 text-amber-400" />,
      members: [
        {
          nameEn: 'Dr. Arsam Khan',
          nameAr: 'د. أرسم خان',
          roleEn: 'Chief Academic Officer (CAO)',
          roleAr: 'الرئيس الأكاديمي (CAO)',
          descEn: 'Oversees curriculum alignment with international standards and leads educational strategy.',
          descAr: 'يشرف على مواءمة المناهج الدراسية مع المعايير الدولية ويقود الاستراتيجية التعليمية.',
          initials: 'AK',
          color: 'from-amber-500 to-orange-500 border-amber-300 dark:from-amber-500/20 dark:to-orange-500/10 dark:border-amber-500/30',
          textColor: 'text-white dark:text-amber-300'
        },
        {
          nameEn: 'Sarah Jenkins',
          nameAr: 'سارة جينكينز',
          roleEn: 'Chief Technology Officer (CTO)',
          roleAr: 'رئيس تكنولوجيا المعلومات (CTO)',
          descEn: 'Manages the learning platform infrastructure, cloud labs, and data security.',
          descAr: 'تدير البنية التحتية لمنصة التعلم، والمختبرات السحابية، وأمن البيانات.',
          initials: 'SJ',
          color: 'from-blue-500 to-indigo-500 border-blue-300 dark:from-blue-500/20 dark:to-indigo-500/10 dark:border-blue-500/30',
          textColor: 'text-white dark:text-blue-300'
        }
      ]
    },
    {
      id: 'curriculum',
      titleEn: 'Curriculum & Instruction',
      titleAr: 'المناهج والتدريس',
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      members: [
        {
          nameEn: 'Alex Mercer',
          nameAr: 'أليكس ميرسر',
          roleEn: 'Head of Robotics & STEM Learning',
          roleAr: 'رئيس الروبوتات وتعليم STEM',
          descEn: 'Develops hands-on hardware projects and microcontroller programming pathways.',
          descAr: 'يطور مشاريع الأجهزة العملية ومسارات برمجة المتحكمات الدقيقة.',
          initials: 'AM',
          color: 'from-emerald-500 to-teal-500 border-emerald-300 dark:from-emerald-500/20 dark:to-teal-500/10 dark:border-emerald-500/30',
          textColor: 'text-white dark:text-emerald-300'
        },
        {
          nameEn: 'Elena Rostova',
          nameAr: 'إيلينا روستوفا',
          roleEn: 'Lead Coding & Software Instructor',
          roleAr: 'مدرب البرمجة والبرمجيات الرئيسي',
          descEn: 'Designs core software curriculums and text-based application development courses.',
          descAr: 'تصمم المناهج البرمجية الأساسية ودورات تطوير التطبيقات القائمة على النصوص.',
          initials: 'ER',
          color: 'from-purple-500 to-pink-500 border-purple-300 dark:from-purple-500/20 dark:to-pink-500/10 dark:border-purple-500/30',
          textColor: 'text-white dark:text-purple-300'
        }
      ]
    },
    {
      id: 'operations',
      titleEn: 'Operations & Student Success',
      titleAr: 'العمليات ونجاح الطلاب',
      icon: <Users className="w-5 h-5 text-rose-400" />,
      members: [
        {
          nameEn: 'Marcus Vance',
          nameAr: 'ماركوس فانس',
          roleEn: 'Student Support & Operations Specialist',
          roleAr: 'أخصائي دعم الطلاب والعمليات',
          descEn: 'Handles student onboarding, platform troubleshooting, and daily operational logistics.',
          descAr: 'يتولى دمج الطلاب الجدد، واستكشاف أخطاء المنصة وإصلاحها، واللوجستيات التشغيلية اليومية.',
          initials: 'MV',
          color: 'from-rose-500 to-red-500 border-rose-300 dark:from-rose-500/20 dark:to-red-500/10 dark:border-rose-500/30',
          textColor: 'text-white dark:text-rose-300'
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10" id="team-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="team-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 dark:text-blue-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
            {lang === 'ar' ? 'فريق العمل المعتمد' : 'TNI Expert Faculty'}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            {lang === 'ar' ? 'تكنونوفا الدولية — فريقنا' : 'TechNova International — Our Team'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'ar' 
              ? 'مجموعة متميزة من الأكاديميين وخبراء الصناعة الذين يقودون التميز في البرمجة والذكاء الاصطناعي على مستوى العالم.' 
              : 'A dedicated team of industry leaders and educators driving STEM and computing excellence globally.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16" id="team-categories">
          {teamCategories.map((category, catIdx) => (
            <div key={category.id} className="space-y-6" id={`cat-${category.id}`}>
              {/* Category Title Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800" id={`cat-title-${category.id}`}>
                <div className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {lang === 'ar' ? category.titleAr : category.titleEn}
                </h3>
              </div>

              {/* Members of this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id={`members-grid-${category.id}`}>
                {category.members.map((member, memberIdx) => (
                  <motion.div
                    key={member.nameEn}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: memberIdx * 0.1 }}
                    className={`group relative bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:shadow-xl`}
                    id={`member-card-${member.nameEn.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {/* Member Avatar Circle */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} border flex items-center justify-center font-display text-xl font-bold ${member.textColor} shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                        {member.initials}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-grow space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200">
                            {lang === 'ar' ? member.nameAr : member.nameEn}
                          </h4>
                          <p className="text-sm font-mono font-medium text-blue-500 dark:text-blue-400 tracking-tight">
                            {lang === 'ar' ? member.roleAr : member.roleEn}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {lang === 'ar' ? member.descAr : member.descEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact info box - specified by user */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-8 rounded-3xl bg-white/60 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md relative overflow-hidden"
          id="team-contact-info"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-400">✉️</span> 
                {lang === 'ar' ? 'الاستفسارات العامة' : 'General Inquiries'}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                {lang === 'ar' 
                  ? 'للاتصال بأي عضو في فريقنا أو للأسئلة العامة المتعلقة ببرامجنا، يرجى التواصل عبر البريد الإلكتروني الرسمي لشركة تكنونوفا الدولية:'
                  : 'To contact any member of our team or for general questions regarding our programs, please reach out to:'}
              </p>
            </div>
            <a
              href="mailto:info@technovainternational.com"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white font-mono text-sm rounded-xl transition-all duration-300 group shadow-md"
              id="team-email-link"
            >
              <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>info@technovainternational.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
