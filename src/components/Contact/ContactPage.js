import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import { MdEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("Name:",name)
        console.log("Email:",email)
        console.log("Subject:",subject)
        console.log("Message:",message)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <div className='mt-[82px]'>
            <Banner title='Contact Us' />

            <div className='bg-blue-100 my-10  py-10 mx-2 px-4 md:px-10  '>
                <h2 className='text-center text-3xl font-bold text-zinc-800 uppercase'> Contact Form</h2>
                <div className='flex flex-col md:flex-row gap-10 md:gap-5 max-w-[1200px] mx-auto py-10'>
                    {/* Office details */}
                    <div className='w-full flex flex-col gap-5   '>
                        <h1 className='text-zinc-900 text-2xl font-bold'>Get in Touch  </h1>
                        <p className='text-zinc-600'> Have questions about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                        <div className='flex gap-4 items-center bg-white rounded-lg px-8 py-5 w-full  '>
                            <span className=' p-2 bg-gradient-to-b from-blue-200 to-blue-300 hover:from-blue-500 cursor-pointer hover:to-blue-600 text-white rounded-lg'>
                                <MdEmail size={30} />
                            </span>
                            <div className=''>
                                <h4 className='text-2xl font-semibold text-zinc-800'>Email</h4>
                                <Link to='' className='text-zinc-600 font-semibold hover:text-blue-600 cursor-pointer'>Grocery@gmail.com</Link>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center bg-white rounded-lg px-8 py-5 w-full  '>
                            <span className=' p-2 bg-gradient-to-b from-green-200 to-green-300 hover:from-green-500 cursor-pointer hover:to-green-600 text-white rounded-lg'>
                                <MdOutlineLocalPhone size={30} />
                            </span>
                            <div className=''>
                                <h4 className='text-2xl font-semibold text-zinc-800'>Phone Number</h4>
                                <Link to='' className='text-zinc-600 font-semibold hover:text-blue-600 cursor-pointer'>9817361906</Link>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center bg-white rounded-lg px-8 py-5 w-full  '>
                            <span className=' p-2 bg-gradient-to-b from-blue-100 to-blue-200 hover:from-blue-500 cursor-pointer hover:to-blue-600 text-white rounded-lg'>
                                <CiLocationOn size={30} />
                            </span>
                            <div className=''>
                                <h4 className='text-2xl font-semibold text-zinc-800'>Address</h4>
                                <Link to='' className='text-zinc-600 font-semibold hover:text-blue-600 cursor-pointer'>Kathmandu</Link>
                            </div>
                        </div>
                    </div>
                    {/* contact from */}
                    <div className='w-full bg-white rounded-lg p-5'>
                        <h5 className='text-zinc-900 text-2xl font-bold'>Send us a message</h5>
                        <div className='py-5'>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="" className='font-semibold text-zinc-800 text-xl'>Name</label>
                                <input value={name} type="text" placeholder='Enter Your Full Name' className='border-2  p-2 text-xl rounded-xl outline-none ' onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-2 mt-5 '>
                                <label htmlFor="" className='font-semibold text-zinc-800 text-xl'>Email</label>
                                <input value={email} type="email" placeholder='Your Email Address' className='border-2  p-2 text-xl rounded-xl outline-none 'onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-2 mt-5 '>
                                <label htmlFor="" className='font-semibold text-zinc-800 text-xl'>Subject</label>
                                <input value={subject} type="text" placeholder='Reason To Contact' className='border-2  p-2 text-xl rounded-xl outline-none ' onChange={(e)=>setSubject(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-2 mt-5 '>
                                <label htmlFor="" className='font-semibold text-zinc-800 text-xl'>Message</label>
                                <textarea value={message} rows={5} placeholder='Tell us about your self' className='border-2  p-2 text-xl rounded-xl outline-none ' onChange={(e)=>setMessage(e.target.value)} />
                            </div>
                            <div onClick={handlesubmit} className=' text-end mt-5'>
                                <Button  content='Send Message' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
