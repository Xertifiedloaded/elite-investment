import React from 'react';
import { recent } from '../utils';
const RecentItemTable = () => {
    return (
        <table className="table-auto w-full  shadow-sm border-creamBorder hover:shadow-md transition-all duration-300">
            <thead>
                <tr className='text-gray md-sm'>
                    <th className="px-4 py-2">Image</th>
                    <th className="pl-4 text-start py-2">Name</th>
                    <th className="px-4 py-2">Method</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Timestamp</th>
                    <th className="px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody className='xs:text-sm'>
                {recent.map((item, index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2">
                            <img className="w-8 h-8 rounded-full" src={item.image} alt="" />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                        <td className="px-4 py-2">{item.method}</td>
                        <td className={`${item.type === 'deposit' ? 'text-green-600' : item.type === 'withdrawal' ? 'text-red-600' : null} px-4 flex py-2`}>
                            {item.type === 'deposit' ? <p>+</p> : item.type === 'withdrawal' ? <p>-</p> : null}
                            ${item.amount}
                            </td>
                        <td className={`${item.type === 'deposit' ? 'text-green-600' : item.type === 'withdrawal' ? 'text-red-600' : null} px-4 py-2`}>{item.type}</td>
                        <td className="px-4 py-2 whitespace-nowrap" >{item.timestamp}</td>
                        <td className={`${item.status === 'pending' ? 'text-red-500' : item.status === 'successful' ? 'text-green-500' : null} px-4 py-2`}>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RecentItemTable;