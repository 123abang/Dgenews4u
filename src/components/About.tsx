import React from 'react';
import { Newspaper, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Latest Crypto News",
      description: "Stay informed with real-time updates on the most exciting developments in the crypto space."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Expert insights and technical analysis to help you make informed investment decisions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join our thriving community of crypto enthusiasts and stay ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About DgeNews4u
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're revolutionizing how crypto enthusiasts stay informed with cutting-edge news coverage and community-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <div className="mb-4 text-purple-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;