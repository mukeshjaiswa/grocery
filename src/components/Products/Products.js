import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../../components/ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function Products() {
    const categories = ['All', "Fruits", "Vegetables", "Dairy", "SeaFood"]
    const [activeTab, setActiveTab] = useState("All")

    const filterproduct = activeTab === 'All' ? ProductList : ProductList.filter((items) => items.category === activeTab);

    return (
        <div className='max-w-[1200px] px-20 mx-auto py-10'>

            <Heading highlight='Our' content='Products' />
            <div className='flex flex-wrap gap-3 justify-center mt-5 '>
                {categories.map((category,index) => (
                    <div key={index} className={`text-xl rounded-md cursor-pointer  gap-5 px-5 py-2 ${activeTab === category ? "bg-orange-500 text-white" : 'bg-zinc-100'} 
                    `} onClick={() => setActiveTab(category)}>{category}</div>

                ))}
            </div>
            {/* card products display */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {filterproduct.slice(0, 6).map((product) => (
                    <Cards key={product.id} image={product.image} title={product.name} price={product.price} category={product.category} />
                ))}
            </div>

            <div className='mx-auto flex justify-center items-center mt-10 fit'>
                <Link to='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-600 px-8 py-3 rounded-md text-white text-lg transition-all duration-300 hover:to-orange-700 hover:scale-105 cursor-pointer'  > See More</Link>
            </div>

        </div>
    )
}
