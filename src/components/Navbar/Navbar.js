import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { TbMenu2, TbMenu3 } from "react-icons/tb";


export default function Navbar() {
    const [isShadow, setIsShadow] = useState(false)
    const [menuopen, setMenuOPen] = useState(false)
    const toggle = () => {
        setMenuOPen(!menuopen)
    }
    useEffect(() => {
        const handlershadow = () => {
            setIsShadow(window.scrollY > 10)
        }
        window.addEventListener('scroll', handlershadow)
        return () => window.removeEventListener('scroll', handlershadow)
    }, [])
    return (
        <div className={`bg-white z-50  fixed top-0 right-0 left-0 ${isShadow ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)]' : ''}`}>

            <div className={`max-w-[1200px] mx-auto bg-white h-[12vh] md:h-[14vh] md:p-10 p-5      flex justify-between items-center `}>
                {/* desktop view */}
                <a href="#" className='text-2xl font-bold text-zinc-800 '>
                    Gr<span className='text-orange-500 uppercase'>o</span>cify
                </a>
                <ul className='md:flex hidden items-center gap-10' >
                    <li>
                        <a href="#" className='font-bold tracking-wide text-orange-600'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>Contact</a>
                    </li>
                </ul>

                <div className='flex items-center gap-3'>
                    {/* input fields  */}
                    <div className='md:flex items-center hidden border-2 border-orange-500 p-1 rounded-full'>
                        <input type="text" name='text' placeholder='Search...' className='outline-none bg-transparent h-[5vh] px-2 py-1 ' autoComplete='off' />
                        <button className='w-10 h-10 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-2xl font-bold text-white'>
                            <CiSearch />
                        </button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaHeart />
                    </a>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <HiShoppingBag />
                    </a>
                    {/* Nav Action */}
                    <a href="#" onClick={toggle} className='text-3xl md:hidden  text-zinc-800'>
                        {menuopen ? <TbMenu3 /> :
                            <TbMenu2 />
                        }
                    </a>

                </div>
                {/* Mobile menu */}

                <ul className={`flex flex-col p-10 mx-auto md:mx-auto bg-orange-500/50 backdrop-blur-xl rounded-md gap-x-15 gap-y-10 absolute top-24  md:hidden items-center  transform -translate-x-1/2 transition-all duration-300 ${menuopen ? 'left-1/2' : '-left-1/2'}`} >
                    <li>
                        <a href="#" className='font-bold tracking-wide text-orange-600'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold tracking-wide text-zinc-800 hover:text-orange-600'>Contact</a>
                    </li>
                    <div className='flex items-center md:hidden border-2 border-orange-500 p-1 rounded-full'>
                        <input type="text" name='text' placeholder='Search...' className='outline-none bg-transparent h-[5vh] px-2 ' autoComplete='off' />
                        <button className='w-10 h-10 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-2xl font-bold text-white'>
                            <CiSearch />
                        </button>
                    </div>
                </ul>



            </div >

        </div>

    )
}
