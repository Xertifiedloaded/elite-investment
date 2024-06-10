import React, { useState } from 'react'
import Graph from '../components/Bar'
import PieChat from '../components/PieChat'
import { FaDollarSign } from 'react-icons/fa6'
import { BiMoneyWithdraw, BiWallet } from 'react-icons/bi'
import { PiHandDeposit } from 'react-icons/pi'
import { recent, transactionHistory } from '../utils'
import { GrTransaction } from 'react-icons/gr'
import RecentItemTable from '../components/RecentTable'
import Deposit from '../components/modal/Deposit'
import Withdrawal from '../components/modal/Withdrawal'

export default function Dashboard() {
  const [isWithdraw, setIsWithdraw] = useState(false)
  const [isDeposit, setIsDeposit] = useState(false)
  const toggleWithdrawal = () => {
    setIsWithdraw(!isWithdraw)
  }

  const toggleDeposit = () => {
    setIsDeposit(!isDeposit)
  }
  return (
    <>
      <div className='md:flex xs:block  gap-2   justify-between '>
        <div className='md:w-[50%] md:shadow-md py-4 md:px-6'>
          <h1 className='md:text-4xl xs:text-2xl font-bold,'>Hey, Daniel</h1>
          <div className='bg-blue-500   text-white mt-2 py-[50px] gap-3  rounded-[20px]'>
            <div className='flex justify-center items-center flex-col'>
              <p className='flex font-600 items-center gap-3 '> <div className='h-4 w-4 flex justify-center items-center rounded-full bg-white'><FaDollarSign color='blue' fontSize={14} /></div> Balance</p>
              <h1 className='text-4xl font-700 flex items-center'><FaDollarSign />100,000</h1>
            </div>
            <div className='flex mt-10    justify-evenly'>
              <button onClick={toggleWithdrawal} className=' w-[35%] h-[47px] rounded-lg text-white lg:bg-green-500  xl:text-lg flex justify-center items-center gap-4 '>
                <BiMoneyWithdraw fontSize={20} className='' />
                withdraw
              </button>
              <button onClick={toggleDeposit} className='w-[35%] h-[47px] rounded-lg text-white lg:bg-green-500  xl:text-lg flex justify-center items-center gap-4 '>
                <BiWallet />
                Deposit
              </button>
            </div>
          </div>
          <div className='md:mt-5'>
            <h1 className='md:text-xl xs:text-xl xs:mb-2 xs:mt-4 font-500'>Transaction History</h1>
            <div className='xs:h-[500px]    xs:overflow-y-auto'>
              {
                transactionHistory.map((items, i) => (
                  <div className='flex  mt-4 mb-6 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                      <GrTransaction className='md:text-[20px] lg:text-[30px]' />
                      <div>
                        <h1 className='lg:text-md md:text-md xs:sm font-bold capitalize'>{items.type}</h1>
                        <p className={`${items.type === 'deposit' ? 'text-green-600' : items.type === 'withdrawal' ? 'text-red-600' : null} flex md:text-sm xs:xs items-center`}>
                          {items.type === 'deposit' ? <p>+</p> : items.type === 'withdrawal' ? <p>-</p> : null}${items.amount}</p>
                      </div>
                    </div>
                    <div>
                      <p className={`${items.status === 'pending' ? 'text-red-500' : items.status === 'successful' ? 'text-green-500' : null}`}>     {items.status}</p>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
        <div className=' shadow-xl md:px-4 md:w-[50%]'>
          <Graph />
          <section className=''>
            <h1 className='md:font-500 mt-5 xs:text-xl xs:font-bold md:text-xl'>Recent Transaction</h1>
            <div className='overflow-scroll md:h-[400px] xs:h-[300px] overflow-y-auto'>
              <RecentItemTable />
            </div>
          </section>
        </div>
      </div>

      {isDeposit && <Deposit toggleDeposit={toggleDeposit} />}
      {isWithdraw && <Withdrawal toggleWithdrawal={toggleWithdrawal} />}
    </>
  )
}
