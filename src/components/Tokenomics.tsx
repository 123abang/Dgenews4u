import React from 'react';

const Tokenomics = () => {
  const tokenomics = [
    { label: 'Liquidity Pool', percentage: 40, color: 'from-purple-500 to-pink-500' },
    { label: 'Development', percentage: 20, color: 'from-blue-500 to-cyan-500' },
    { label: 'Marketing', percentage: 15, color: 'from-green-500 to-emerald-500' },
    { label: 'Team', percentage: 15, color: 'from-yellow-500 to-orange-500' },
    { label: 'Community Rewards', percentage: 10, color: 'from-red-500 to-rose-500' },
  ];

  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Understanding our token distribution and utility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square">
              {tokenomics.map((item, index) => {
                const rotation = index * (360 / tokenomics.length);
                const skew = (360 / tokenomics.length);
                return (
                  <div
                    key={item.label}
                    className={`absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-y-1/2 origin-left bg-gradient-to-r ${item.color}`}
                    style={{
                      transform: `rotate(${rotation}deg) skew(${90 - skew}deg)`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {tokenomics.map((item) => (
              <div key={item.label} className="flex items-center space-x-4">
                <div className={`w-16 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;