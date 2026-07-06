import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Mail, Users, Star, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { Language } from '../translations';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function RegisterModal({ isOpen, onClose, lang }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    parentName: '',
    email: '',
    program: lang === 'en' ? 'Advanced Computer Science' : 'علوم الكمبيوتر المتقدمة',
    country: lang === 'en' ? 'United Kingdom' : 'المملكة المتحدة',
    experience: 'Beginner',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = {
    en: {
      alertCandidate: 'Please fill in candidate details.',
      alertContact: 'Please fill in contact coordinates.',
      classIntake: 'Class of 2026 Intake',
      admissionBoard: 'TechNova Admission Board',
      admissionDesc: 'Begin your student registration process for academic tracks and IJCC tournaments, or complete the official Google Form directly.',
      regGoogleForm: 'Register via Google Form',
      stepCandidate: 'Step 1: Candidate Profile',
      studentNameLabel: 'Student Full Name',
      studentNamePlaceholder: 'e.g. Liam Vance',
      studentAgeLabel: 'Student Age',
      studentAgePlaceholder: 'e.g. 14',
      experienceLabel: 'Prior Tech Experience',
      expBeginner: 'Beginner (No background)',
      expIntermediate: 'Intermediate (Some coding)',
      expAdvanced: 'Advanced (Competing/Building)',
      btnNextContact: 'Next: Contact Details',
      stepContact: 'Step 2: Contact Information',
      parentNameLabel: 'Parent / Guardian Name',
      parentNamePlaceholder: 'e.g. Dr. Arthur Vance',
      parentEmailLabel: 'Guardian Email Address',
      parentEmailPlaceholder: 'e.g. arthur@vance-corp.com',
      countryLabel: 'Territory / Country of Residence',
      btnBack: 'Back',
      btnNextProgram: 'Next: Selected Program',
      stepProgram: 'Step 3: Program Selection',
      chooseTrackLabel: 'Choose Academic or Tournament Track:',
      agreementDesc: 'By submitting this application, you confirm interest in receiving curriculum schedules, entrance assessment procedures, and championship invitations for your student.',
      btnProcessing: 'Processing Admission...',
      btnConfirm: 'Confirm Registration',
      registeredTitle: 'Application Registered!',
      registeredDesc: (name: string, prog: string) => `We are thrilled to welcome ${name} to the TechNova Global pipeline for the ${prog} track.`,
      deskDetails: 'Admissions Desk Details',
      statusProvisional: 'STATUS: PROVISIONAL',
      territory: 'Territory:',
      admissionCode: 'Admission Code:',
      inboundMailbox: 'Inbound Mailbox:',
      guaranteeTitle: 'To guarantee your entry in the official IJCC competition:',
      completeGoogleForm: 'Complete Official Google Form',
      sentInbox: 'Brochure & placement diagnostics sent to inbox.',
      closePortal: 'Close Portal'
    },
    ar: {
      alertCandidate: 'يرجى ملء بيانات المرشح.',
      alertContact: 'يرجى ملء بيانات الاتصال.',
      classIntake: 'دفعة قبول عام 2026',
      admissionBoard: 'مجلس القبول في تكنونوفا',
      admissionDesc: 'ابدأ عملية تسجيل الطالب في المسارات الأكاديمية وبطولات IJCC، أو أكمل نموذج Google الرسمي مباشرة.',
      regGoogleForm: 'التسجيل عبر نموذج Google',
      stepCandidate: 'الخطوة 1: ملف المرشح',
      studentNameLabel: 'الاسم الكامل للطالب',
      studentNamePlaceholder: 'مثال: ليام فانس',
      studentAgeLabel: 'عمر الطالب',
      studentAgePlaceholder: 'مثال: 14',
      experienceLabel: 'الخبرة التقنية السابقة',
      expBeginner: 'مبتدئ (لا يوجد خلفية)',
      expIntermediate: 'متوسط (بعض البرمجة)',
      expAdvanced: 'متقدم (منافسة / بناء مشاريع)',
      btnNextContact: 'التالي: تفاصيل الاتصال',
      stepContact: 'الخطوة 2: معلومات الاتصال',
      parentNameLabel: 'اسم ولي الأمر / الوصي',
      parentNamePlaceholder: 'مثال: د. آرثر فانس',
      parentEmailLabel: 'البريد الإلكتروني للوصي',
      parentEmailPlaceholder: 'مثال: arthur@vance-corp.com',
      countryLabel: 'الإقليم / بلد الإقامة',
      btnBack: 'رجوع',
      btnNextProgram: 'التالي: البرنامج المختار',
      stepProgram: 'الخطوة 3: اختيار البرنامج',
      chooseTrackLabel: 'اختر المسار الأكاديمي أو التنافسي:',
      agreementDesc: 'بإرسال هذا الطلب، فإنك تؤكد اهتمامك بتلقي جداول المناهج الدراسية، وإجراءات تقييم القبول، ودعوات البطولة لطالبك.',
      btnProcessing: 'جاري معالجة القبول...',
      btnConfirm: 'تأكيد التسجيل',
      registeredTitle: 'تم تسجيل الطلب!',
      registeredDesc: (name: string, prog: string) => `يسعدنا جداً الترحيب بـ ${name} في مسار تكنونوفا العالمي لتخصص ${prog}.`,
      deskDetails: 'تفاصيل مكتب القبول',
      statusProvisional: 'الحالة: مؤقتة',
      territory: 'البلد / الإقليم:',
      admissionCode: 'رمز القبول:',
      inboundMailbox: 'صندوق البريد الوارد:',
      guaranteeTitle: 'لضمان مشاركتك في بطولة IJCC الرسمية للبرمجة للناشئين:',
      completeGoogleForm: 'أكمل نموذج Google الرسمي',
      sentInbox: 'تم إرسال الكتيب والتشخيص إلى بريدك الإلكتروني.',
      closePortal: 'إغلاق البوابة'
    }
  }[lang];

  const programs = lang === 'en' ? [
    'Advanced Computer Science',
    'Applied AI & Neural Networks',
    'Robotics Engineering Labs',
    'Global STEM Foundations',
    'Creative Innovation Lab',
    'Championship Preparation Track (IJCC)',
  ] : [
    'علوم الكمبيوتر المتقدمة',
    'الذكاء الاصطناعي التطبيقي والشبكات العصبية',
    'مختبرات هندسة الروبوتات',
    'أسس العلوم والتكنولوجيا والهندسة والرياضيات (STEM)',
    'مختبر الابتكار الإبداعي',
    'مسار التحضير للبطولة الدولية (IJCC)',
  ];

  const countries = lang === 'en' ? [
    'United Kingdom',
    'United States',
    'Singapore',
    'Canada',
    'Germany',
    'United Arab Emirates',
    'Australia',
    'Malaysia',
    'India',
    'Nigeria',
  ] : [
    'المملكة المتحدة',
    'الولايات المتحدة الأمريكية',
    'سنغافورة',
    'كندا',
    'ألمانيا',
    'الإمارات العربية المتحدة',
    'أستراليا',
    'ماليزيا',
    'الهند',
    'نيجيريا',
  ];

  const handleNext = () => {
    if (step === 1 && (!formData.studentName || !formData.studentAge)) {
      alert(t.alertCandidate);
      return;
    }
    if (step === 2 && (!formData.parentName || !formData.email)) {
      alert(t.alertContact);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success state
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-[#030712] border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden relative shadow-2xl z-10 text-right"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-6 p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:scale-105 transition-all cursor-pointer z-20 ${lang === 'ar' ? 'left-6' : 'right-6'}`}
            aria-label="Close form"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header banner */}
          <div className={`p-8 bg-slate-950 border-b border-slate-900 relative ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500" />
            <div className="flex items-center gap-3 mb-2">
              <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest">
                {t.classIntake}
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {t.admissionBoard}
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              {t.admissionDesc}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://forms.gle/HAP7HhKNG9urFFH96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[11px] font-bold transition-all shadow-md cursor-pointer"
              >
                <span>{t.regGoogleForm}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            {/* Stepper indicator */}
            {step < 4 && (
              <div className="flex gap-2 mt-6">
                <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-amber-400' : 'bg-slate-800'}`} />
                <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-amber-400' : 'bg-slate-800'}`} />
                <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 3 ? 'bg-amber-400' : 'bg-slate-800'}`} />
              </div>
            )}
          </div>

          {/* Form / Dynamic steps container */}
          <div className="p-8">
            <form onSubmit={handleFormSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`space-y-5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <span>{t.stepCandidate}</span>
                    </div>

                    <div>
                      <label htmlFor="reg-student-name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        {t.studentNameLabel}
                      </label>
                      <input
                        id="reg-student-name"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder={t.studentNamePlaceholder}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-student-age" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                          {t.studentAgeLabel}
                        </label>
                        <input
                          id="reg-student-age"
                          type="number"
                          min="7"
                          max="17"
                          required
                          value={formData.studentAge}
                          onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                          placeholder={t.studentAgePlaceholder}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="reg-student-exp" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                          {t.experienceLabel}
                        </label>
                        <select
                          id="reg-student-exp"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 text-sm transition-colors cursor-pointer"
                        >
                          <option value="Beginner">{t.expBeginner}</option>
                          <option value="Intermediate">{t.expIntermediate}</option>
                          <option value="Advanced">{t.expAdvanced}</option>
                        </select>
                      </div>
                    </div>

                    <div className={`pt-4 flex ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>{t.btnNextContact}</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`space-y-5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>{t.stepContact}</span>
                    </div>

                    <div>
                      <label htmlFor="reg-parent-name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        {t.parentNameLabel}
                      </label>
                      <input
                        id="reg-parent-name"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder={t.parentNamePlaceholder}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-email" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        {t.parentEmailLabel}
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.parentEmailPlaceholder}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors text-left"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-country" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        {t.countryLabel}
                      </label>
                      <select
                        id="reg-country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 text-sm transition-colors cursor-pointer"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl text-sm transition-colors cursor-pointer"
                      >
                        {t.btnBack}
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>{t.btnNextProgram}</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`space-y-5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <Star className="w-4 h-4 text-emerald-400" />
                      <span>{t.stepProgram}</span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-3">
                        {t.chooseTrackLabel}
                      </span>
                      <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-2 scrollbar-thin">
                        {programs.map((p) => (
                          <div
                            key={p}
                            onClick={() => setFormData({ ...formData, program: p })}
                            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer text-sm ${
                              formData.program === p
                                ? 'bg-blue-600/10 border-blue-500 text-white'
                                : 'bg-slate-900/60 border-slate-850 text-slate-400 hover:border-slate-800 hover:text-slate-300'
                            }`}
                          >
                            <span>{p}</span>
                            <div
                              className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                                formData.program === p ? 'bg-blue-500 border-blue-500 text-slate-950' : 'border-slate-800'
                              }`}
                            >
                              {formData.program === p && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl flex items-start gap-3.5 text-xs text-slate-500">
                      <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {t.agreementDesc}
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl text-sm transition-colors cursor-pointer"
                      >
                        {t.btnBack}
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-xl hover:shadow-amber-500/10 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? t.btnProcessing : t.btnConfirm}
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                      <Award className="w-8 h-8 text-amber-400" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-display text-white">
                        {t.registeredTitle}
                      </h4>
                      <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                        {t.registeredDesc(formData.studentName, formData.program)}
                      </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 w-full text-left space-y-2.5 text-xs font-mono" dir="ltr">
                      <div className="flex justify-between border-b border-slate-900 pb-2 text-slate-500">
                        <span>{t.deskDetails}</span>
                        <span className="text-amber-400">{t.statusProvisional}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t.territory}</span>
                        <span className="text-slate-300">{formData.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t.admissionCode}</span>
                        <span className="text-slate-300">TNA-{Math.floor(Math.random() * 900000 + 100000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t.inboundMailbox}</span>
                        <span className="text-slate-300">{formData.email}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl w-full text-center space-y-2">
                      <p className="text-xs text-slate-300 font-semibold">
                        {t.guaranteeTitle}
                      </p>
                      <a
                        href="https://forms.gle/HAP7HhKNG9urFFH96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer animate-pulse"
                      >
                        <span>{t.completeGoogleForm}</span>
                        <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                      </a>
                    </div>

                    <div className="text-[10px] text-slate-500 flex items-center gap-2 justify-center">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>{t.sentInbox}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setStep(1); // Reset step for next open
                      }}
                      className="px-6 py-2.5 bg-white text-slate-950 font-bold rounded-xl text-xs hover:bg-slate-100 transition-colors cursor-pointer w-full"
                    >
                      {t.closePortal}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
