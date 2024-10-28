import React, { useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

const LiveMarketTracker = () => {
  const [selectedCoin, setSelectedCoin] = useState("BTCUSDT");

  const handleCoinChange = (coinSymbol) => {
    setSelectedCoin(coinSymbol);
  };

  return (
    <section className="bg-black py-12">
      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-6 text-center">Live Crypto Market</h2>

        {/* Coin Selection Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleCoinChange('BTCUSDT')}
            className={`px-6 py-2 font-semibold rounded-lg ${selectedCoin === 'BTCUSDT' ? 'bg-green-500' : 'bg-gray-700'}`}
          >
            Bitcoin (BTC)
          </button>
          <button
            onClick={() => handleCoinChange('ETHUSDT')}
            className={`px-6 py-2 font-semibold rounded-lg ${selectedCoin === 'ETHUSDT' ? 'bg-green-500' : 'bg-gray-700'}`}
          >
            Ethereum (ETH)
          </button>
          <button
            onClick={() => handleCoinChange('SOLUSDT')}
            className={`px-6 py-2 font-semibold rounded-lg ${selectedCoin === 'SOLUSDT' ? 'bg-green-500' : 'bg-gray-700'}`}
          >
            Solana (SOL)
          </button>
        </div>

        {/* Responsive Container for TradingView Widget */}
        <div className="tradingview-container">
          <AdvancedRealTimeChart
            symbol={`BINANCE:${selectedCoin}`}
            theme="dark"
            autosize={true}
            hide_side_toolbar={false}
          />
        </div>
      </div>

      <style jsx>{`
        .tradingview-container {
          width: 100%;
          height: 500px; /* Adjust height as needed */
          max-height: 600px; /* Optional max-height */
        }
      `}</style>
<br />
      <p className='text-center text-1xl text-white font-thin opacity-70'> The Cryptology Academy also gives a signals for crypto charts for the possible gains </p>
    </section>
  );
};

export default LiveMarketTracker;
