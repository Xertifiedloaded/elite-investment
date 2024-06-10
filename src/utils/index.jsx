import { CgProfile } from "react-icons/cg";
import { FaHome, FaReceipt, FaUser } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import ola from '../assets/xertifiedloaded.jpeg'

export const transactionHistory = [
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'pending',
    amount: '2000'
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000'
  },
]


export const recent = [
  {
    type: 'deposit',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'deposit',
    status: 'pending',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola

  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'deposit',
    status: 'pending',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
  {
    type: 'withdrawal',
    status: 'successful',
    amount: '2000',
    timestamp: "31-05-2024",
    name: "Ikugbamire Dara",
    method: "BTC",
    image: ola
  },
]












export const lineChartData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: "Deposit",
      data: [200, 500, 600, 800, 400, 500, 700],
      borderColor: 'rgb(75,192,192)',
      borderWidth: 1
    },
    {
      label: "Withdraw",
      data: [500, 800, 600, 600, 100, 500, 300],
      borderColor: 'red',
      borderWidth: 1
    }
  ]

}

export const PieChatData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: "Withdraw",
      data: [50, 850, 19000, 1200, 100, 5700, 1100],
      borderColor: ["red", "yellow", "blue", "pink", "blue", "brown", "green"],
      hoverOffset: 4
    }
  ]

}





export const sidebar = [
  {
    icon: <CgProfile />,
    name: "My profile",
    path: '/profile'
  },
  {
    icon: <FaHome />,
    name: "Dashboard",
    path: '/dashboard'
  },
  {
    icon: <FaReceipt />,
    name: "Transaction",
    path: '/dashboard/transaction'
  },
  {
    icon: <FaUser />,
    name: "Account",
    path: '/dashboard/account'
  },
  {
    icon: <FcSettings />,
    name: "Settings",
    path: '/dashboard/settings'
  },
]




export const courseOutline = [
  {
    id: 1,
    heading: " Are my investments guaranteed?",
    overview: 'Yes. Investments are guaranteed. All investments may lose money, including possible loss of principal. That being said, our financial advisors work to build and diversification your investment to secure 60% of your investments upon drawdowns from trading'
  },

  {
    id: 2,
    heading: "Is there a minimum amount I need to get started with you?",
    overview: 'Yes, at the moment you need $1500 of investable assets to begin as a standard investor with us. Our clients range from just over our minimum to above $10,000,000. We are interested in helping people across the savings spectrum.'
  },
  {
    id: 3,
    heading: "Can you help me invest my retirement plan at work?",
    overview: 'Yes. Many work retirement plans are loaded with high-fee, underperforming mutual funds. It can be difficult to even find the index funds! Our financial advisors can manage your personal work retirement plan as one of the accounts under our purview if you are a client. Or, we can transition your entire business to a good, low-cost indexing plan. You can contact your account manager for this'
  },
  {
    id: 4,
    heading: "How do I fund my wallet?",
    overview: 'You can fund your dollar wallet account via the following means Depositing through USDC, LITECOIN , BTC Or contact your account manager for other means available at the time for funding'
  },
  {
    id: 5,
    heading: "How do I withdraw my money?",
    overview: 'Provide your bank account details, or your USDC, BITCOIN, LITECOIN Address enter the amount you wish to withdraw, and confirm the transaction.'
  },
];






