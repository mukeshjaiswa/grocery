import React from 'react'
import Grocery from '../../assest/grocery.png'
import Button from '../Button/Button'

export default function Hero() {
    return (
        <section>
            <div className='max-w-[1200px] h-screen  mx-auto md:p-10 p-5 mt-[100px] md:mt-20 md:flex items-center gap-3 '>
                {/* content section */}
                <div className='flex-1 '>
                    <span className='bg-orange-100 text-orange-500 px-5 py-2 rounded-full '>Export Best Quality...</span>
                    <h1 className='md:text-7xl text-5xl leading-tight font-bold mt-4 mb-4 '>Tasty Organic <span className='text-orange-600'>Fruits</span>  & <span className='text-orange-600'>Veggies</span> In Your City</h1>
                    <p className='text-zinc-800 text-md md:text-lg mt-4 mb-4 max-w-[530px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <Button content={'Shop Now'} />
                </div>
                {/* image section */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Grocery image" />
                </div>

            </div>
        </section>
    )
}

// Export Best Quality...

// Tasty Organic Fruits & Veggies In Your City

// Bred for a high content of beneficial substances. Our products are all fresh and healthy.

// Fruits & Veggies
// Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.