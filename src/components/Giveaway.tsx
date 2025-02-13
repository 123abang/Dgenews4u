import React from 'react';
import { Gift, Phone } from 'lucide-react';
import Photo2 from './images/photo_2025-02-13_09-05-48.jpg';

const Giveaway = () => {
  return (
    <section id="giveaway" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Giveaways
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our exciting giveaways and win amazing prizes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Regular Giveaway */}
          <div className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="mb-6 text-purple-500">
              <Gift className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">$25 Live Show Giveaway</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">Join our live shows for a chance to win $25!</p>
              <div className="space-y-2">
                <p className="font-semibold">How to Enter:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Like the show</li>
                  <li>Retweet</li>
                  <li>Comment</li>
                  <li>Bookmark</li>
                </ul>
              </div>
            </div>
          </div>

          {/* iPhone/SOL Giveaway */}
          <div className="p-8 rounded-xl bg-gradient-to-b from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <img
                src={Photo2}
                alt="iPhone 16 Pro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-6 text-pink-500">
              <Phone className="w-12 h-12" />
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full inline-block mb-4">
              4th Show Special
            </div>
            <h3 className="text-2xl font-bold mb-4">Happy Hour Mega Giveaway</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">When we hit 1M Market Cap:</p>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">Win Your Choice Of:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span>iPhone 16 Pro</span>
                    <span className="text-gray-400">or</span>
                  </li>
                  <li className="text-xl font-semibold">$1,000 in SOL</li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400">Stay tuned for the 4th show and don't miss your chance to win big!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giveaway;