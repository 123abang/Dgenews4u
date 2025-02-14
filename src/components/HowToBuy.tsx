import React from 'react';
import { Wallet, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Create Wallet",
      description: "Download and set up Phantom or Trust Wallet"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Get Solana",
      description: "Purchase BNB and transfer to your wallet"
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Connect to DEX",
      description: "Connect your wallet to PumpFun"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Swap for DgeNews",
      description: "Swap SOL for DgeNews tokens"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            How to Buy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to purchase DgeNews tokens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <div className="mb-4 text-purple-500">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;