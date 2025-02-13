import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: 'CoinGecko',
      logo: 'https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png'
    },
    {
      name: 'CoinMarketCap',
      logo: 'https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg'
    },
    {
      name: 'Dextools',
      logo: 'https://www.dextools.io/app/assets/img/logo/dextools-logo-dark.svg'
    },
    {
      name: 'DexScreener',
      logo: 'https://dexscreener.com/img/dexscreener-dark.svg'
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Partners
        </h2>
      </div>

      {/* Double marquee for infinite loop effect */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-8 flex items-center justify-center bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}-duplicate`}
              className="mx-8 flex items-center justify-center bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;