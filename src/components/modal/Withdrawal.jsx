import React, { useState } from 'react';

export default function Withdraw({ toggleWithdraw }) {
    const [method, setMethod] = useState('');
    const [userWallet, setUserWallet] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMethodSelected, setIsMethodSelected] = useState(false);
    const [withdrawalCompleted, setWithdrawalCompleted] = useState(false);

    const blockchainInfoMap = {
        'btc': 'Please ensure the wallet address supports Bitcoin (BTC).',
        'usdt': 'Please ensure the wallet address supports BEP-20 USDT tokens.',
        'usd': 'Please ensure the wallet address supports BEP-20 USD tokens.',
        'eth': 'Please ensure the wallet address supports BEP-20 ETH tokens.',
    };

    const handleMethodChange = (event) => {
        const selectedMethod = event.target.value;
        setMethod(selectedMethod);
        setIsMethodSelected(true);
    };

    const handleWalletChange = (event) => {
        setUserWallet(event.target.value);
    };

    const handleWithdrawalConfirmation = (e) => {
        e.preventDefault()
        setIsLoading(true);
        setWithdrawalCompleted(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl relative z-10 md:min-w-[40%] mx-auto p-8">
                    <h2 className="text-2xl font-bold mb-4">Withdraw</h2>
                    <form action="">
                        <label htmlFor="method" className='mb-3 block'>
                            Method
                            <select
                                name="method"
                                className='block w-full h-[50px] border outline-none rounded-lg px-4 border-creamBorder'
                                onChange={handleMethodChange}
                            >
                                <option className='text-xs' value="">Select Withdrawal Method</option>
                                <option value="btc">BTC</option>
                                <option value="usdt">USDT</option>
                                <option value="usd">USD</option>
                                <option value="eth">ETH</option>
                            </select>
                        </label>
                        {isMethodSelected && (
                            <div className="mb-3">
                                <p className="text-sm text-red-500 mt-2">{blockchainInfoMap[method]}</p>
                            </div>
                        )}
                        <label htmlFor="userWallet" className='mb-3 block'>
                            Wallet Address
                            <input
                                type="text"
                                name="userWallet"
                                className='block w-full h-[50px] border outline-none rounded-lg px-4 border-creamBorder'
                                value={userWallet}
                                onChange={handleWalletChange}
                                placeholder="Enter your wallet address"
                            />
                        </label>
                        <div className='flex gap-8'>
                            <button onClick={toggleWithdraw} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                            <button onClick={handleWithdrawalConfirmation} disabled={!isMethodSelected || !userWallet || withdrawalCompleted} className={`bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${(!isMethodSelected || !userWallet || withdrawalCompleted) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                {isLoading ? 'Loading...' : 'Confirm Withdrawal'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}