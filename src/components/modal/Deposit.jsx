import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

export default function Deposit({ toggleDeposit }) {
    const [method, setMethod] = useState('');
    const [wallet, setWallet] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationTimer, setConfirmationTimer] = useState(7200);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [isMethodSelected, setIsMethodSelected] = useState(false);

    useEffect(() => {
        let timer;
        if (showConfirmation) {
            timer = setInterval(() => {
                setConfirmationTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [showConfirmation]);

    const walletQRCodeMap = {
        '0xeb480B8c671399679783cA778Fe39e53930Be821': '0xeb480B8c671399679783cA778Fe39e53930Be821',
        '0xeb480B8c671399679783cA778Fe39e53930Be822': '0xeb480B8c671399679783cA778Fe39e53930Be822',
        '0xeb480B8c671399679783cA778Fe39e53930Be823': '0xeb480B8c671399679783cA778Fe39e53930Be823',
        'bc1q4mq70fc88as7mn8r8nqc0py54hwx0mmhjvy06x': 'bc1q4mq70fc88as7mn8r8nqc0py54hwx0mmhjvy06x'
    };

    const blockchainInfoMap = {
        '0xeb480B8c671399679783cA778Fe39e53930Be821': 'Only send USDT(BEP20) token assets to this address. other assets will be lost forever ',
        '0xeb480B8c671399679783cA778Fe39e53930Be822': 'Only send USD token assets to this address. other assets will be lost forever',
        '0xeb480B8c671399679783cA778Fe39e53930Be823': 'Only send ETH (BEP20) token asset to this address. other assets will be lost forever',
        'bc1q4mq70fc88as7mn8r8nqc0py54hwx0mmhjvy06x': 'only send Bitcoin(BTC) tokens asset to this address. other assets will be lost forever'
    };

    const handleMethodChange = (event) => {
        const selectedMethod = event.target.value;
        setMethod(selectedMethod);
        setIsMethodSelected(true); 
        switch (selectedMethod) {
            case 'btc':
                setWallet('bc1q4mq70fc88as7mn8r8nqc0py54hwx0mmhjvy06x');
                break;
            case 'usdt':
                setWallet('0xeb480B8c671399679783cA778Fe39e53930Be821');
                break;
            case 'usd':
                setWallet('0xeb480B8c671399679783cA778Fe39e53930Be822');
                break;
            case 'eth':
                setWallet('0xeb480B8c671399679783cA778Fe39e53930Be823');
                break;
            default:
                setWallet('');
        }
    };

    const renderWalletInfo = () => {
        if (walletQRCodeMap[wallet]) {
            return (
                <div className='my-4'>
                    <QRCode value={walletQRCodeMap[wallet]} />
                    <p className="text-sm text-red-500 mt-2">{blockchainInfoMap[wallet]}</p>
                </div>
            );
        } else {
            return null;
        }
    };

    const handlePaymentConfirmation = () => {
        setIsLoading(true);
        setShowConfirmation(true);
        setPaymentCompleted(true);
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
                    <h2 className="text-2xl font-bold mb-4">Deposit</h2>
                    <form action="">
                        <label htmlFor="" className='mb-3 block'>
                            method
                            <select
                                name=""
                                className='block w-full h-[50px] border outline-none rounded-lg px-4 border-creamBorder'
                                id=""
                                onChange={handleMethodChange}
                            >
                                <option className='text-xs' value="">Select Deposit Method</option>
                                <option value="btc">BTC</option>
                                <option value="usdt">USDT</option>
                                <option value="usd">USD</option>
                                <option value="eth">ETH</option>
                            </select>
                        </label>
                        <label htmlFor="" className='mb-3 block'>
                            wallet
                            <input type='text' value={wallet} className='w-full flex justify-start items-center md:text-sm h-[50px] border outline-none rounded-lg px-4 border-creamBorder'/>
                             
                     
                            {renderWalletInfo()}
                        </label>
                        {showConfirmation && (
                            <div className="mb-3">
                                <h1 className="text-xl font-bold">Waiting for Confirmation</h1>
                                <p className="text-sm">Time remaining: {Math.floor(confirmationTimer / 3600)}:{Math.floor((confirmationTimer % 3600) / 60)}:{confirmationTimer % 60}</p>
                            </div>
                        )}
                        <div className='flex gap-8'>
                            <button onClick={toggleDeposit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                            <button onClick={handlePaymentConfirmation} disabled={!isMethodSelected || paymentCompleted} className={`bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${(!isMethodSelected || paymentCompleted) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                {isLoading ? 'Loading...' : 'I have paid'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}