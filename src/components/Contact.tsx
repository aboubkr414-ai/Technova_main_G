import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Globe, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Parent',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rolesList = ['Parent', 'School Principal', 'Educator', 'Student', 'Sponsor / Partner'];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({ name: '', email: '', role: 'Parent', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden bg-grid-blue">
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
              Get In Touch
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Connect With Our Global Admissions
            </h2>
            
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Have questions regarding curriculum formats, school affiliation schemas, or candidate registrations for the International Junior Coding Championship? Reach out directly. Our response timeline is typically within 12-24 hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@technovainternational.com"
                className="group flex items-center gap-5 p-5 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-widest">
                    Direct Email
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    info@technovainternational.com
                  </span>
                </div>
              </a>

              <a
                href="https://whatsapp.com/channel/0029Vb8aju5J93wN93AVPE00"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-widest">
                    Official Support Channel
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    TechNova WhatsApp Channel
                  </span>
                </div>
              </a>

              <div className="group flex items-center gap-5 p-5 bg-slate-900/40 border border-slate-800 rounded-2xl transition-all duration-300 shadow-lg">
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <Globe className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-widest">
                    Core Portal
                  </span>
                  <span className="text-base font-bold text-slate-300">
                    technovainternational.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Message Form */}
          <div className="lg:col-span-7 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold font-display text-white border-b border-slate-900 pb-4">
                    Send An Inquiry Message
                  </h3>

                  <div>
                    <label htmlFor="form-name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                      Your Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alistair Vance"
                      className="w-full px-5 py-4 bg-slate-900/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                      Your Contact Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alistair@academy.org"
                      className="w-full px-5 py-4 bg-slate-900/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-3">
                      I am registering interest as a:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {rolesList.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setFormData({ ...formData, role: r })}
                          className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                            formData.role === r
                              ? 'bg-amber-500 border-amber-500 text-slate-950'
                              : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                      Describe your enquiry / interest
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the program names or championship information you require..."
                      className="w-full px-5 py-4 bg-slate-900/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-enquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold rounded-xl transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Dispatch Inquiry'}</span>
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center justify-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-slate-400 text-sm max-w-md leading-relaxed mx-auto">
                      Thank you for contacting TechNova International. Our admissions desk has received your request and is compiling the necessary program brochures. Expect contact shortly.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-900 px-4 py-2 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Reference ID: TN-2026-{Math.floor(Math.random() * 90000 + 10000)}</span>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
