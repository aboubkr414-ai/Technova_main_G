import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  Sparkles, 
  Download, 
  Share2, 
  ExternalLink,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Language, translations } from '../translations';

// Asset paths for the generated brochures (using exact replicas of the user-provided brochures)
const BROCHURES = [
  {
    id: 'blue',
    titleEn: 'Official Flagship Campaign (English)',
    titleAr: 'الحملة الإعلانية الرئيسية (الانجليزية)',
    descEn: 'The flagship blue campaign poster outlining competition categories A-D, cash prizes, registration schedule, official website links, and the critical security warning.',
    descAr: 'الملصق الأزرق الرئيسي الذي يوضح فئات المسابقة من A إلى D، والجوائز النقدية، والجدول الزمني للتسجيل، والروابط الرسمية، وتنبيه الحماية.',
    image: '/src/assets/images/brochure_english_blue_1783362443667.jpg',
    color: 'from-blue-600 to-indigo-600',
    tag: 'Flagship Edition'
  },
  {
    id: 'dark_orange',
    titleEn: 'Dynamic Dark Orange Edition (English)',
    titleAr: 'إصدار حملة برتقالي غامق (الإنجليزية)',
    descEn: 'A dark, high-contrast alternative brochure with electric accents, showcasing registration info, qualifier round schedules, and curriculum details.',
    descAr: 'نسخة داكنة عالية التباين بألوان برتقالية متوهجة، تعرض تفاصيل الجولات التأهيلية، وفئات التقديم للطلاب وأكواد الـ QR.',
    image: '/src/assets/images/brochure_english_dark_1783362457228.jpg',
    color: 'from-amber-600 to-orange-600',
    tag: 'Dark Orange Edition'
  },
  {
    id: 'light_teal',
    titleEn: 'Modern Light Teal Banner (English)',
    titleAr: 'إصدار ألوان فاتحة حديث (الإنجليزية)',
    descEn: 'A beautiful white brochure with emerald-teal accents, perfect for STEM academies, explaining the 100% free registration policy and schedule details.',
    descAr: 'منشور رائع باللون الأبيض وتأثيرات اللون الأخضر والزمردي، يوضح شروط المشاركة المجانية تماماً وجدول المواعيد والروابط المباشرة.',
    image: '/src/assets/images/brochure_english_light_1783362466721.jpg',
    color: 'from-teal-600 to-emerald-600',
    tag: 'Light Teal Edition'
  },
  {
    id: 'arabic_teal',
    titleEn: 'Official Arabic Banner - Teal Accent',
    titleAr: 'المنشور الرسمي المعتمد بالعربية - باللون التركواز',
    descEn: 'Our fully translated official Arabic brochure, highlighting competition details, schedule timeline, and secure contact links for Arabic speaking countries.',
    descAr: 'النسخة الرسمية العربية المترجمة بالكامل، وتوضح تفاصيل الفئات الأربعة والجدول الزمني وجوائز البطولة مع التنبيه الأمني لمنع عمليات الاحتيال.',
    image: '/src/assets/images/brochure_arabic_teal_1783362479362.jpg',
    color: 'from-emerald-600 to-teal-600',
    tag: 'Arabic Teal'
  },
  {
    id: 'arabic_purple',
    titleEn: 'Official Arabic Banner - Purple Accent',
    titleAr: 'المنشور الرسمي المعتمد بالعربية - باللون البنفسجي',
    descEn: 'An aesthetic Arabic campaign flyer variant with premium violet accents, including official QR codes, TNI trust details, and free enrollment badges.',
    descAr: 'إصدار عربي مميز بلمسات اللون البنفسجي والبنفسجي الفاتح، يشمل رموز الاستجابة السريعة (QR) وتفاصيل تكنونوفا الدولية والاشتراك المجاني.',
    image: '/src/assets/images/brochure_arabic_purple_1783362488399.jpg',
    color: 'from-purple-600 to-rose-600',
    tag: 'Arabic Purple'
  }
];

interface BrochureSlideshowProps {
  lang: Language;
  onRegisterClick: () => void;
}

export default function BrochureSlideshow({ lang, onRegisterClick }: BrochureSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const autoplayRef = useRef<any>(null);
  
  const t = translations[lang];

  // Start/Stop Autoplay logic
  useEffect(() => {
    if (isPlaying && !isLightboxOpen) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPlaying, currentIndex, isLightboxOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BROCHURES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BROCHURES.length) % BROCHURES.length);
  };

  const currentBrochure = BROCHURES[currentIndex];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'IJCC 2026 Championship Brochure',
          text: currentBrochure.titleEn,
          url: window.location.origin + currentBrochure.image,
        });
      } catch (err) {
        // ignore
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + currentBrochure.image);
      alert(lang === 'en' ? 'Brochure link copied to clipboard!' : 'تم نسخ رابط الملصق الإعلاني للحافظة!');
    }
  };

  return (
    <div className="w-full max-w-4xl mb-12 relative z-20">
      
      {/* Title block inside Hero component */}
      <div className="text-center mb-6 space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {lang === 'en' ? 'Interactive Brochure Showroom' : 'معرض منشورات البطولة التفاعلي'}
        </span>
        <h3 className="text-xl md:text-2xl font-black text-white">
          {lang === 'en' ? 'Official Championship Flyers & Materials' : 'منشورات وحملات البطولة المعتمدة'}
        </h3>
        <p className="text-slate-400 text-xs max-w-xl mx-auto">
          {lang === 'en' 
            ? 'Swipe or play the slideshow below to preview the official tournament brochures distributed worldwide.' 
            : 'تصفح أو قم بتشغيل العرض التلقائي بالأسفل لمعاينة الملصقات الرسمية للبطولة والمنشورة عالمياً.'}
        </p>
      </div>

      {/* Main Slideshow Frame */}
      <div className="bg-slate-900/50 border border-slate-800/80 rounded-[2rem] p-4 md:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
        
        {/* Subtle decorative background light */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: Flyer Showcase / Interactive Device Mockup */}
          <div className="md:col-span-7 relative group">
            
            {/* Visual Frame */}
            <div className="aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-inner relative flex items-center justify-center">
              
              {/* Slides with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.96, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full h-full relative"
                >
                  <img 
                    src={currentBrochure.image} 
                    alt={currentBrochure.titleEn}
                    className="w-full h-full object-cover select-none cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onClick={() => setIsLightboxOpen(true)}
                  />
                  
                  {/* Floating magnification trigger */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-4 right-4 p-2.5 bg-slate-950/80 hover:bg-slate-900 text-white rounded-xl border border-slate-800/80 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
                    title={lang === 'en' ? 'Expand Flyer' : 'تكبير المنشور'}
                  >
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </button>

                  {/* Indicator banner on active slide */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/80 backdrop-blur-md p-3 rounded-xl flex items-center justify-between gap-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-black text-slate-300">
                        {currentBrochure.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">
                      {currentIndex + 1} / {BROCHURES.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Quick overlay controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="w-9 h-9 bg-slate-950/90 border border-slate-800/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 pointer-events-auto transition-all shadow-md cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="w-9 h-9 bg-slate-950/90 border border-slate-800/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 pointer-events-auto transition-all shadow-md cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* RIGHT: Flyer Description & Metadata */}
          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6">
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-black">
                  {lang === 'en' ? 'CHAMPIONSHIP CAMPAIGN' : 'حملة البطولة الرسمية'}
                </span>
                <h4 className="text-lg font-extrabold text-white leading-snug">
                  {lang === 'en' ? currentBrochure.titleEn : currentBrochure.titleAr}
                </h4>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {lang === 'en' ? currentBrochure.descEn : currentBrochure.descAr}
              </p>

              {/* Free features checklist inside slideshow */}
              <div className="space-y-2 bg-slate-950/40 p-3.5 border border-slate-850 rounded-xl">
                <div className="flex items-center gap-2 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'en' ? 'Verified Credentials' : 'بيانات معتمدة ومؤكدة'}</span>
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  {lang === 'en' 
                    ? 'Registration, training materials, and final project submissions are 100% free of charge.' 
                    : 'التسجيل والمواد التدريبية وتقديم المشاريع مجاني بالكامل وبدون رسوم.'}
                </div>
              </div>
            </div>

            {/* Actions & Play controls */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={onRegisterClick}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-blue-500/10"
                >
                  <span>{lang === 'en' ? 'Register Free Now' : 'سجل مجاناً الآن'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition-all duration-200 cursor-pointer"
                  title={lang === 'en' ? 'Copy Link' : 'نسخ رابط الملصق'}
                >
                  <Share2 className="w-4 h-4 text-amber-500" />
                </button>
              </div>

              {/* Slideshow Controls Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 border border-slate-805 rounded-xl text-xs text-slate-500">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-mono font-bold cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'en' ? 'Pause Autoplay' : 'إيقاف مؤقت'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/10" />
                      <span>{lang === 'en' ? 'Resume Play' : 'تشغيل تلقائي'}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1">
                  {BROCHURES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-slate-800 hover:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Gorgeous Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-[9999] flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl backdrop-blur-md hover:scale-105 transition-all shadow-xl z-[10000] cursor-pointer"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>

            {/* Lightbox Inner Canvas */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-5xl w-full max-h-[80vh] aspect-[4/3] relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentBrochure.image} 
                alt={currentBrochure.titleEn}
                className="w-full h-full object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Float navigation inside Lightbox */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 border border-slate-800 text-white hover:text-amber-400 hover:scale-105 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-2xl cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 border border-slate-800 text-white hover:text-amber-400 hover:scale-105 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-2xl cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Legend inside Lightbox */}
            <div className="mt-6 text-center max-w-xl space-y-1.5" onClick={(e) => e.stopPropagation()}>
              <h4 className="text-white font-extrabold text-lg">
                {lang === 'en' ? currentBrochure.titleEn : currentBrochure.titleAr}
              </h4>
              <p className="text-slate-400 text-xs">
                {lang === 'en' ? currentBrochure.descEn : currentBrochure.descAr}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 text-xs font-mono">
                <span className="text-slate-500 font-bold">
                  {currentIndex + 1} of {BROCHURES.length}
                </span>
                <span className="text-slate-600">•</span>
                <button 
                  onClick={onRegisterClick}
                  className="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer"
                >
                  {lang === 'en' ? 'Go to Register Form' : 'الذهاب لنموذج التسجيل'}
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
