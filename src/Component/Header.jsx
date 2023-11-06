import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-blue-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='font-bold text-yellow-500'>The</span>
            <span className='font-bold  text-green-500'>Estate</span>
            <span className='font-bold text-blue-500'>Developer</span>
        </h1>
        </Link>
        <form className='bga rounded-lg p-3 flex items-center'>
            <input type="text" className='placeholder-gray-500 bg-transparent outline-none font-serif w-24 sm:w-64 font-semibold' placeholder='Search...' />
            <FaSearch className='cursor-pointer'/>
        </form>
        <ul className='flex gap-10 cursor-pointer'>
            <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline hover:shadow-lg font-semibold'>
                Home
            </li>
            </Link >
            <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline hover:shadow-lg font-semibold'>
                About
            </li>
            </Link>
            <Link to='signin'>
            <li className='text-white hover:underline hover:shadow-lg font-semibold'>Sign In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
