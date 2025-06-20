import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

const connection = new Connection('https://api.mainnet-beta.solana.com');
const PROGRAM_ID = new PublicKey('YOUR_PROGRAM_ID_HERE');

function App() {
  const [tax, setTax] = useState('Loading...');
  const [whisper, setWhisper] = useState('Listening...');
  const [volatility, setVolatility] = useState('...');
  const wallet = useWallet();

  useEffect(() => {
    const fetchData = async () => {
      setTax('5.6%');
      setVolatility('LOW');
      setWhisper('#213 STAGNATION IS DEATH. THE TAX HAS RISEN TO 5.6%.');
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-red-800 text-black font-mono">
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-white">$NOBODY</h1>
        <p className="text-sm mt-2 text-white">BUILT BY NOBODY. CONTROLLED BY NOBODY.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto px-4 text-black">
        <div className="bg-stone-100 p-4">
          <h2 className="font-bold text-xl mb-2">THE VOID</h2>
          <p><strong>CURRENT TAX:</strong> {tax}</p>
          <p><strong>PRICE VOLATILITY:</strong> {volatility}</p>
        </div>
        <div className="bg-stone-100 p-4">
          <h2 className="font-bold text-xl mb-2">WALLET TITLES</h2>
          <WalletMultiButton className="!bg-black !text-white" />
          {wallet.connected && (
            <p className="mt-4">WALLET TAGGED: <strong>ACOLYTE</strong></p>
          )}
        </div>
        <div className="bg-stone-100 p-4 col-span-2">
          <h2 className="font-bold text-xl mb-2">LATEST WHISPER</h2>
          <p>{whisper}</p>
        </div>
        <div className="bg-stone-100 p-4">
          <h2 className="font-bold text-xl mb-2">JUDGMENT FEED</h2>
          <p>ACOLYTE AA8F..12B HAS REMAINED LOYAL</p>
          <p>HERETIC C914..DF3A HAS SOWN WEAKNESS</p>
        </div>
        <div className="bg-stone-100 p-4">
          <h2 className="font-bold text-xl mb-2">WHISPER LOG</h2>
          <p>#212 ORDER IS A LIE. VOLATILITY RESTORED.</p>
          <p>#211 THE VOID OBSERVES IN SILENCE.</p>
        </div>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  const wallets = [new PhantomWalletAdapter()];
  return (
    <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}