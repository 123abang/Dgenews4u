import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
          alt="Crypto Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to DgeNews4u
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your premier source for the latest and most exciting cryptocurrency news and updates in the DeFi space
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#how-to-buy"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Buy Now
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;