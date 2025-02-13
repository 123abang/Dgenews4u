import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import ContractAddress from './components/ContractAddress';
import ImageGallery from './components/ImageGallery';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Giveaway from './components/Giveaway';
import LiveStream from './components/LiveStream';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated DNA Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3a0647,#1f0443_50%,#000000_100%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zM32 0l-3.657 3.657 1.414 1.414L35.143 0H32zm-6.485 0L20.657 4.95 22.07 6.364l6.364-6.364H25.515zm12.97 0l4.95 4.95-1.414 1.414-6.364-6.364h2.828zm-6.485 0l-4.95 4.95 1.414 1.414 6.364-6.364h-2.828zm-12.97 0l-4.95 4.95 1.414 1.414 6.364-6.364h-2.828zM0 0l.828.828-1.414 1.414L0 2.828V0zm54.627 0L60 5.373l-.828.828L54.627 1.656 55.455.828 54.627 0z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          animation: 'moveBackground 20s linear infinite'
        }} />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Tokenomics />
        <ContractAddress />
        <ImageGallery />
        <LiveStream />
        <Giveaway />
        <Partners />
        <HowToBuy />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;