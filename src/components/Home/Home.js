import React from 'react'
import Category from '../Category/Category'
import Discount from '../Discount/Discount'

import Hero from '../Hero/Hero'
import Process from '../Process/Process'
import Products from '../Products/Products'
import Testimonial from '../Testimonial/Testimonial'
import Values from '../Values/Values'

export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Process/>
            <Testimonial/>
            {/* <Footer/> */}


        </div>
    )
}
