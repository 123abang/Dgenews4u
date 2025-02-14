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
          {/* Pie Chart */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
            <div className="aspect-square relative">
              {tokenomics.map((item, index) => {
                const startAngle = tokenomics
                  .slice(0, index)
                  .reduce((sum, t) => sum + t.percentage, 0);
                const endAngle = startAngle + item.percentage;
                
                const startCoordinates = getCoordinates(startAngle, 50);
                const endCoordinates = getCoordinates(endAngle, 50);
                const largeArcFlag = item.percentage > 50 ? 1 : 0;

                return (
                  <svg
                    key={item.label}
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d={`
                        M 50 50
                        L ${startCoordinates.x} ${startCoordinates.y}
                        A 50 50 0 ${largeArcFlag} 1 ${endCoordinates.x} ${endCoordinates.y}
                        L 50 50
                      `}
                      className={`fill-current bg-gradient-to-r ${item.color}`}
                      style={{
                        fill: `url(#gradient-${index})`,
                      }}
                    />
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          className={`text-${item.color.split(' ')[1]}`}
                          style={{ stopColor: 'currentColor' }}
                        />
                        <stop
                          offset="100%"
                          className={`text-${item.color.split(' ')[3]}`}
                          style={{ stopColor: 'currentColor' }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                );
              })}
              {/* Center circle for better aesthetics */}
              <div className="absolute inset-[15%] rounded-full bg-black border-4 border-white/10" />
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-6 lg:justify-self-start">
            {tokenomics.map((item) => (
              <div key={item.label} className="flex items-center space-x-4">
                <div className={`w-16 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full mt-1">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
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

// Helper function to calculate coordinates on the circle
function getCoordinates(percentage: number, radius: number) {
  const angle = (percentage * 3.6) * (Math.PI / 180);
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export default Tokenomics;