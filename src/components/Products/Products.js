import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../../components/ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

export default function Products() {
    const categories = ['All', "Fruits", "Vegetables", "Dairy", "SeaFood"]
    const [activeTab, setActiveTab] = useState("All")

    const filterproduct = activeTab === 'All' ? ProductList : ProductList.filter((items) => items.category === activeTab);

    return (
        <div className='max-w-[1200px] px-20 mx-auto py-10'>

            <Heading highlight='Our' content='Products' />
            <div className='flex flex-wrap gap-3 justify-center mt-5 '>
                {categories.map((category) => (
                    <div className={`text-xl rounded-md cursor-pointer  gap-5 px-5 py-2 ${activeTab === category ? "bg-orange-500 text-white" : 'bg-zinc-100'} 
                    `} onClick={() => setActiveTab(category)}>{category}</div>

                ))}
            </div>
            {/* card products display */}

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-10'>
                {filterproduct.slice(0, 8).map((product) => (
                    <Cards image={product.image} title={product.name} price={product.price} category={product.category} />
                ))}
            </div>

            <div className='mx-auto flex justify-center items-center mt-10 fit'>
                <Button content='See More' />
            </div>

        </div>
    )
}
