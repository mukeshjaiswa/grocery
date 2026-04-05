import React from 'react'
import Heading from '../Heading/Heading'
import Foodcat from '../../assest/fruits-and-veggies.png'
import Meatcat from '../../assest/meat-and-seafood.png'
import Dairycat from '../../assest/dairy-and-eggs.png'

import { Link } from 'react-router-dom'

export default function Category(props) {

    return (
        <div className='max-w-[1200px] mx-auto mt-[9rem] md:mt-0 px-10 py-20'>
            <Heading highlight='Shop' content="by Category" />
            <div className='flex flex-wrap gap-7   mt-10'>
                {category.map((cart) => (
                    <div key={cart.id} className='flex-1 hover:scale-105 cursor-pointer basis-[300px] '>
                        <div className='w-full min-h-[30vh]  relative -mb-10'>
                            <img src={cart.image} alt='image' className='absolute bottom-0' />
                        </div>
                        <div className='bg-zinc-100 pt-20 p-8 rounded-md '>
                            <h2 className='text-zinc-800 text-2xl font-bold'>{cart.title}</h2>
                            <p className='text-zinc-600  mt-3 mb-9'>{cart.description}</p>

                            <Link to={cart.path} className='bg-gradient-to-b from-orange-400 to-orange-600 px-8 py-3 rounded-md text-white text-lg transition-all duration-300 hover:to-orange-700 hover:scale-105 cursor-pointer' >See All</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: Foodcat,
        path:'/shopbycategory/fruitsandveggies',
        category:'fruits'
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: Dairycat,
        path:'/shopbycategory/dairyandeggs',
        category:'Dairy'
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: Meatcat,
        path:'/shopbycategory/meatandseafood',
        categoruy:'SeaFood'
    },

]








