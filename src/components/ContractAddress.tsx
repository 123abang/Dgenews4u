import React from 'react';
import { Copy } from 'lucide-react';

const ContractAddress = () => {
  const contractAddress = "0x1234...5678"; // Replace with actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!");
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contract Address
          </h2>
          <div className="inline-flex items-center space-x-2 bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
               onClick={copyToClipboard}>
            <code className="text-gray-300">{contractAddress}</code>
            <Copy className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractAddress;