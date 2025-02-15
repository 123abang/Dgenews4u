import React from 'react';
import { Youtube } from 'lucide-react';

const LiveStream = () => {
  return (
    <section id="livestream" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Live Stream
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our live streams for the latest crypto news and updates
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center" id="youtube-placeholder">
            <div className="text-center p-8">
              <Youtube className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-gray-400">Stream will appear here when live</p>
            </div>
          </div>
          {/* YouTube iframe will be injected here when live */}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://youtube.com/live/KspFDirV44s?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe to Our Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;