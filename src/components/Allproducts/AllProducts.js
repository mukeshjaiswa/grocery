import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'
import ProductList from '../ProductList/ProductList'

export default function AllProducts() {
    const [products, setProducts] = useState(ProductList)

    return (
        <div className='mt-[80px]'>
            <Banner title='All Products' />
            <div className='max-w-[1200px] mx-auto py-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                {products.map((product) => (
                    <Cards key={product.id} image={product.image} title={product.name} price={product.price} category={product.category} />
                ))}
            </div>

        </div>
    )
}
