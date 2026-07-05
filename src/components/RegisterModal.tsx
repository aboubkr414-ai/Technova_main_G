import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Mail, Users, Star, Award, GraduationCap, ArrowRight } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    parentName: '',
    email: '',
    program: 'Advanced Computer Science',
    country: 'United Kingdom',
    experience: 'Beginner',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    'Advanced Computer Science',
    'Applied AI & Neural Networks',
    'Robotics Engineering Labs',
    'Global STEM Foundations',
    'Creative Innovation Lab',
    'Championship Preparation Track (IJCC)',
  ];

  const countries = [
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
  ];

  const handleNext = () => {
    if (step === 1 && (!formData.studentName || !formData.studentAge)) {
      alert('Please fill in candidate details.');
      return;
    }
    if (step === 2 && (!formData.parentName || !formData.email)) {
      alert('Please fill in contact coordinates.');
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
          className="bg-[#030712] border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden relative shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:scale-105 transition-all cursor-pointer z-20"
            aria-label="Close form"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header banner */}
          <div className="p-8 bg-slate-950 border-b border-slate-900 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500" />
            <div className="flex items-center gap-3 mb-2">
              <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest">
                Class of 2026 Intake
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              TechNova Admission Board
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Begin your student registration process for academic tracks and IJCC tournaments, or complete the official Google Form directly.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://forms.gle/HAP7HhKNG9urFFH96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[11px] font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Register via Google Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <span>Step 1: Candidate Profile</span>
                    </div>

                    <div>
                      <label htmlFor="reg-student-name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        Student Full Name
                      </label>
                      <input
                        id="reg-student-name"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Liam Vance"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-student-age" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                          Student Age
                        </label>
                        <input
                          id="reg-student-age"
                          type="number"
                          min="7"
                          max="17"
                          required
                          value={formData.studentAge}
                          onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                          placeholder="e.g. 14"
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="reg-student-exp" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                          Prior Tech Experience
                        </label>
                        <select
                          id="reg-student-exp"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 text-sm transition-colors cursor-pointer"
                        >
                          <option value="Beginner">Beginner (No background)</option>
                          <option value="Intermediate">Intermediate (Some coding)</option>
                          <option value="Advanced">Advanced (Competing/Building)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Next: Contact Details</span>
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
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>Step 2: Contact Information</span>
                    </div>

                    <div>
                      <label htmlFor="reg-parent-name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        Parent / Guardian Name
                      </label>
                      <input
                        id="reg-parent-name"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Dr. Arthur Vance"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-email" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        Guardian Email Address
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. arthur@vance-corp.com"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="reg-country" className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                        Territory / Country of Residence
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
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Next: Selected Program</span>
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
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      <Star className="w-4 h-4 text-emerald-400" />
                      <span>Step 3: Program Selection</span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-3">
                        Choose Academic or Tournament Track:
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
                        By submitting this application, you confirm interest in receiving curriculum schedules, entrance assessment procedures, and championship invitations for your student.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl text-sm transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-xl hover:shadow-amber-500/10 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Processing Admission...' : 'Confirm Registration'}
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                      <Award className="w-8 h-8 text-amber-400" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-display text-white">
                        Application Registered!
                      </h4>
                      <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                        We are thrilled to welcome <strong className="text-white">{formData.studentName}</strong> to the TechNova Global pipeline for the <strong className="text-white">{formData.program}</strong> track.
                      </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 w-full text-left space-y-2.5 text-xs font-mono">
                      <div className="flex justify-between border-b border-slate-900 pb-2 text-slate-500">
                        <span>Admissions Desk Details</span>
                        <span className="text-amber-400">STATUS: PROVISIONAL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Territory:</span>
                        <span className="text-slate-300">{formData.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Admission Code:</span>
                        <span className="text-slate-300">TNA-{Math.floor(Math.random() * 900000 + 100000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Inbound Mailbox:</span>
                        <span className="text-slate-300">{formData.email}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl w-full text-center space-y-2">
                      <p className="text-xs text-slate-300 font-semibold">
                        To guarantee your entry in the official IJCC competition:
                      </p>
                      <a
                        href="https://forms.gle/HAP7HhKNG9urFFH96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer animate-pulse"
                      >
                        <span>Complete Official Google Form</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="text-[10px] text-slate-500 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Brochure & placement diagnostics sent to inbox.</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setStep(1); // Reset step for next open
                      }}
                      className="px-6 py-2.5 bg-white text-slate-950 font-bold rounded-xl text-xs hover:bg-slate-100 transition-colors cursor-pointer w-full"
                    >
                      Close Portal
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
