import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { GiExpense, GiPaperArrow } from 'react-icons/gi'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (

 

    <header>
    <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Financer</span>
            </a>
            <div className="flex items-center lg:order-2">
                
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
           
            <div className={`${!isMenuOpen&& "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 z-40 `} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                   
                    <li onClick={()=>setIsMenuOpen(false)}>
                        <Link href="/" className=" py-2 pr-4 pl-3 text-gray-700  border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-3"><AiFillDashboard/>Dashboard</Link>
                    </li>
                    <li onClick={()=>setIsMenuOpen(false)}>
                        <Link  href="/incomes" className=" py-2 pr-4 pl-3 text-gray-700  border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-3"><GiPaperArrow/>Incomes</Link>
                    </li>
                    <li onClick={()=>setIsMenuOpen(false)}>
                        <Link href="/expense" className=" py-2 pr-4 pl-3 text-gray-700  border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-3"><GiExpense/>Expenses</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header