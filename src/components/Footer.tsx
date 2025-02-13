import React from 'react';
import { Twitter, Instagram as Telegram, Disc as Discord, Github,Youtube, } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Twitter className="w-6 h-6" />, href: "https://x.com/dgnews4u?s=21&t=dOMypSpsQ22VIp-AB8W6lg", label: "Twitter" },
    { icon: <Telegram className="w-6 h-6" />, href: "#", label: "Telegram" },
    { icon: <Youtube className="w-6 h-6" />, href: "#", label: "YouTube" },
    { icon: <Github className="w-6 h-6" />, href: "#", label: "Github" }
  ];

  return (
    <footer id="socials" className="bg-black/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              DgeNews4u
            </h3>
            <p className="text-gray-400">
              Your premier source for cryptocurrency news and updates
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#how-to-buy" className="text-gray-400 hover:text-white transition-colors">How to Buy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DgeNews4u. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;