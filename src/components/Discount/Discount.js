import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assest/fresh-fruits.png'

export default function Discount() {
    return (
        <section className='bg-zinc-100 w-full bg-no-repeat bg-right bg-contain' style={{ backgroundImage: `url(${FreshFruits})` }}>
            <div className='max-w-[1200px] md:bg-transparent bg-zinc-100 md:px-0  px-10 mx-auto  py-10 md:flex'>
                <span className='md:text-9xl  text-7xl font-bold text-orange-500 transform md:-rotate-90 self-center h-fit '>20%</span>
                <div className='max-w-[650px]'>
                    <h2 className='md:text-7xl text-4xl font-bold text-zinc-800 '>First Order Discount!</h2>
                    <p className='to-zinc-600  my-3 md:my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                    <Button content='Get a Discount' />

                </div>
            </div>
        </section>
    )
}
