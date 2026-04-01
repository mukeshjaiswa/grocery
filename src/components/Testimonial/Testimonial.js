import React from 'react'

import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react'
import Customer1 from '../../assest/customer1.jpg'
import Customer2 from '../../assest/customer2.jpg'
import Customer3 from '../../assest/customer3.jpg'
import Customer4 from '../../assest/customer4.jpg'
import Customer5 from '../../assest/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";

export default function Testimonial() {
    return (
        <div className='max-w-[1200px] mx-auto px-10 py-20 '>
            <Heading highlight="Customers" content='Saying' />

            <div className='flex justify-end gap-x-3 mb-6 mt-5'>
                <button className='custom-prev bg-zinc-100 text-zinc-800 text-2xl p-2 rounded-lg hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer'>
                    <IoIosArrowBack />
                </button>
                <button className='custom-next bg-zinc-100 text-zinc-800 text-2xl p-2 rounded-lg hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer'>
                    < IoIosArrowForward />
                </button>
            </div>
            <Swiper navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev'
            }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    760: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                modules={[Navigation]} className="mySwiper">
                {review.map((item) => (
                    <SwiperSlide   className='bg-zinc-100 rounded-lg p-8' >
                        <div  className='flex items-center gap-5 '>
                            <div className='  w-16 h-16 outline  outline-offset-4 rounded-full outline-2  outline-orange-500  overflow-hidden  '>
                                <img src={item.image} className=' w-full h-full' />
                            </div>
                            
                            <div className=''>
                                <h5 className='text-xl font-bold'>{item.name}</h5>
                                <h3 className='text-zinc-600 '>{item.professional}</h3>
                                <span className='flex text-yellow-400 text-lg gap-1'>
                                    {Array.from({ length: item.rating }, (_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className='mt-5 max-h-[100px]'>
                            <p>{item.para}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper >

        </div>

    )
}

const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        professional: 'Food Blogger',
        rating: 3,
        para: 'FreshBasket is my go - to store for all grocery needs.Their produce is always fresh, and the delivery is super fast.I love the user - friendly interface and variety of organic options!',
        image: Customer1
    },
    {
        id: 2,
        name: 'David Smith',
        professional: 'Chef',
        rating: 4,
        para: 'As a chef, quality ingredients are everything.FreshBasket consistently delivers the best vegetables, herbs, and pantry staples.Highly recommended!',
        image: Customer2
    },
    {
        id: 3,
        name: 'Alya Zahra',
        professional: 'Model',
        rating: 2,
        para: "Shopping online with FreshBasket has saved me so much time.I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
        image: Customer3
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        professional: 'Fitness Coach',
        rating: 5,
        para: 'I appreciate the selection of healthy foods and clean - label products.FreshBasket has been a great partner in my wellness journey!',
        image: Customer4
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        professional: 'Nutritionist',
        rating: 4,
        para: 'FreshBasket offers high - quality groceries at reasonable prices.Their organic section is impressive, and their customer service is top - notch.',
        image: Customer5
    },

]

