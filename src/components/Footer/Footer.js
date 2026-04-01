import React from 'react'
import { MdNavigateNext } from "react-icons/md";

export default function Footer() {
    return (
        <footer className='bg-zinc-100 py-10'>
            <div className=' flex md:flex-row flex-col gap-10 max-w-[1200px] mx-auto px-10'>
                <div className='flex-1 md:basis-[300px] '>
                    <a href="#" className='text-2xl font-bold text-zinc-800 '>
                        Gr<span className='text-orange-500 uppercase'>o</span>cify
                    </a>

                    <p className='text-zinc-800 mt-6 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>

                    <h5 className='mt-6 text-zinc-800'>2025 &copy; All Right Reserved</h5>
                </div>

                <ul className='flex-1'>

                    <h5 className='font-bold text-2xl text-zinc-800'>Company</h5>

                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ's</a>
                    </li>
                </ul>

                <ul className='flex-1'>

                    <h5 className='font-bold text-2xl text-zinc-800'>Support</h5>

                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500' >Support center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>
                <div className='flex-1 '>
                    <h5 className='font-bold text-2xl text-zinc-800'>Stay Connected</h5>
                    <p className='text-zinc-800 mt-6'>
                        Questions or Feedback? <br />
                        we'd love to here from you.
                    </p>
                    <div className='mt-6  md:w-auto w-[250px] w  border flex bg-white rounded-lg p-1 items-center '>
                        <input type="email" name="email" id="email" placeholder='Email Address' autoComplete="off" className='px-2  bg-transparent  h-[6vh] focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 flex items-center rounded-lg text-white text-2xl  p-2'>
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}
