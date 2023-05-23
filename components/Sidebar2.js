import React from 'react'
import { GiExpense, GiPaperArrow } from 'react-icons/gi';
import { AiFillDashboard } from 'react-icons/ai';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='md:w-2/3 xl:w-1/3'>
        <div className='bg-blue-200 h-auto m-5 rounded-3xl'>
            <div className='flex items-center justify-center md:justify-start ml-10 gap-4 pt-10'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt=""  className='w-16 h-16'/>
                
                    <h1 className='text-xl font-semibold'>Mustafa</h1>
                
            </div>
            <div className='md:ml-10 m-10 pb-10 '>
                <ul className='flex md:flex-col justify-center md:justify-start gap-6 md:gap-4 text-lg font-medium'>
                    <Link href="/" className='flex items-center gap-3'> <AiFillDashboard/>Dashboard</Link>
                    <Link href="/incomes" className='flex items-center gap-3'> <GiPaperArrow/>Incomes</Link>
                    <Link href="/expense" className='flex items-center gap-3'><GiExpense/>Expenses</Link>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Sidebar