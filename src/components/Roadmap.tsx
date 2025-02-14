import React from 'react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      items: [
        "Website Launch",
        "Social Media Setup",
        "Community Building",
        "Token Launch"
      ]
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      items: [
        "News Platform Beta",
        "Mobile App Development",
        "Partnership Expansion",
        "Marketing Campaign"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Growth",
      items: [
        "DeFi Integration",
        "NFT Marketplace",
        "Cross-chain Bridge",
        "Governance Implementation"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      items: [
        "International Markets",
        "Advanced Features",
        "Strategic Partnerships",
        "Community DAO"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our journey to revolutionize crypto news and community engagement
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 to-pink-500 sm:left-[20px] sm:w-[4px]" />

          <div className="space-y-16 sm:space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-center sm:items-start sm:pl-10">
                {/* Indicator Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full sm:left-[18px]" />
                
                <div className="flex-1 w-full sm:w-1/2 p-6">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all">
                    <h3 className="text-xl font-bold mb-2 text-purple-500">{phase.phase}</h3>
                    <h4 className="text-lg font-semibold mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Roadmap;
