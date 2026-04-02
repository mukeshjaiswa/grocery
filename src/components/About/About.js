import React from 'react'
import Banner from '../Banner/Banner'

export default function About() {
    return (
        <div className='mt-[82px]'>
            <Banner title='About Us' />
            <div className='max-w-[1200px] mx-auto py-10'>
                <div className='flex bg-zinc-50 flex-col justify-center items-center py-5 px-10'>
                    <h1 className='font-bold text-3xl text-zinc-800 '>About</h1>
                    <p className='mt-10 text-lg text-zinc-800'>
                        Welcome to Grocery! We are dedicated to delivering fresh vegetables, fruits, and groceries right to your doorstep in just a few minutes. Our easy-to-use platform allows you to browse through a wide range of products, add them to your cart, fill in your address, and place your order. Once you’ve made your purchase, we’ll deliver your items within 3 hours.
                        <br />
                        <br />
                        Our mission is to revolutionize the traditional shopping experience for fruits and vegetables in the nation. Gone are the days of wasting time visiting local markets, bargaining with shopkeepers, and carrying heavy bags. With Grocery, you can simply select your desired products online, and we’ll deliver them directly to your doorstep within a few hours.
                        <br />
                        <br />

                        We offer a comprehensive selection of vegetables, fruits, and local items from various districts across nation. Whether you’re looking for everyday items or something rare, our search feature on the website allows you to easily find your preferred products. If you can’t find what you’re looking for, feel free to send us a message via Messenger, and we’ll respond.
                        <br />
                        <br />

                        The products available on our platform are primarily grown on our own farms, with the rest sourced from local farmers and markets. Some exotic items are imported from other countries, while a select few are sourced from Itahari Vegetable Market. We strive to offer a one-stop shop for all your vegetable, fruit, and grocery needs.
                        <br />
                        <br />

                        Experience the convenience of online shopping and have your fresh products delivered with ease—only at Online Tarkari Pasal!
                    </p>
                </div>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-5 py-10 bg-white px-10 shadow-[0_4px_25px_rgba(0,0,0,0.1)]'>
                <div className=' '>
                    <div className='w-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center p-1 text-white font-semibold text-xl rounded-md'><h4>Why Choose Us?</h4></div>
                    <div className='mt-5 flex items-center gap-4'>
                        <div className='h-[100px] bg-gradient-to-b from-orange-400 to-orange-500 w-3'> </div>
                        <p className='text-sm'>We provide fresh, high-quality fruits, vegetables, and local products at affordable prices. Customer satisfaction is our priority, and we ensure fast delivery within 2-3 hours in Kathmandu. Enjoy convenience, reliability, and the best quality with every order!

                        </p>
                    </div>
                </div>
                <div className=' '>
                    <div className='w-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center p-1 text-white font-semibold text-xl rounded-md'><h4>How to Order & Payment</h4></div>
                    <div className='mt-5 flex items-center gap-4'>
                        <div className='h-[100px] bg-gradient-to-b from-orange-400 to-orange-500 w-3'> </div>
                        <p className='text-sm'>Placing an order is easy! Browse our products, add to cart, and checkout. You can also order via Messenger for a quick process. We accept payments through FonePay & Remit Apps, ensuring secure transactions. Delivery charge: Rs. 100.

                        </p>
                    </div>
                </div>
                <div className=' '>
                    <div className='w-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center p-1 text-white font-semibold text-xl rounded-md'><h4>Customer Support & Assistance</h4></div>
                    <div className='mt-5 flex items-center gap-4'>
                        <div className='h-[100px] bg-gradient-to-b from-orange-400 to-orange-500 w-3'> </div>
                        <p className='text-sm'>We provide fresh, high-quality fruits, vegetables, and local products at affordable prices. Customer satisfaction is our priority, and we ensure fast delivery within 2-3 hours in Kathmandu. Enjoy convenience, reliability, and the best quality with every order!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
