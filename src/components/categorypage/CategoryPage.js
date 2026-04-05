import React, { useState, useEffect } from 'react'
import Banner from '../Banner/Banner'

import { useParams } from 'react-router-dom';
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards';


export default function CategoryPage() {
    const { categoryid } = useParams();
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState(categoryid)




    useEffect(() => {
        if (categories === 'fruitsandveggies') {
            setCategories('Fruits')


        }
        else if (categories === 'dairyandeggs') {
            setCategories('Dairy')

        }
        else if (categories === 'meatandseafood') {
            setCategories('SeaFood')
        }
        const filterdata = ProductList.filter(product => product.category === categories)
        setItems(filterdata)
    }, [categories])

    console.log(items)

    return (
        <div>
          
            <div className='mt-[82px]'>
                <Banner title={categoryid} />
            </div>
            <div className='max-w-[1200px] mx-auto py-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                {items.map((product) => (
                    <Cards key={product.id} image={product.image} title={product.name} price={product.price} category={product.category} />
                ))}
            </div>
           

        </div>
    )
}
