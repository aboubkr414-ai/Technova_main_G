import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Competition from './components/Competition';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => {
    window.open('https://forms.gle/HAP7HhKNG9urFFH96', '_blank', 'noopener,noreferrer');
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 selection:text-amber-200 font-sans antialiased overflow-x-hidden">
      {/* Premium ambient light grid backdrop */}
      <div className="fixed inset-0 bg-grid-white opacity-[0.03] pointer-events-none z-0" />
      
      {/* Sticky Header Navigation */}
      <Navbar onRegisterClick={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onRegisterClick={handleOpenRegister} />
        <About />
        <Programs onRegisterClick={handleOpenRegister} />
        <Competition onRegisterClick={handleOpenRegister} />
        <WhyChoose onRegisterClick={handleOpenRegister} />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Dynamic Admission Portal / Registration Form */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
}
