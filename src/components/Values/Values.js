import React from 'react'
import Heading from '../Heading/Heading'
import Basket from '../../assest/basket-full-vegetables.png'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'

export default function Values() {
    return (
        <div className='max-w-[1200px] mx-auto mt-[9rem] md:mt-0 px-10 py-20'>
            <Heading highlight='Our' content='Values' />
            <div className='md:flex-row  flex flex-col mt-5 md:gap-10 gap-5 '>
                {/* left values */}
                <div className='min-h-100 gap-5 md:gap-0 flex flex-col justify-between  '>
                    {contentValues.slice(0, 2).map((item) => (

                        <div key={item.id} className='flex md:flex-row-reverse items-center'>
                            <div className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-2xl rounded-full flex items-center px-4  justify-center w-[50px] h-[50px]'>
                                {item.icon}
                            </div>

                            <div className=' flex flex-col p-2'>
                                <h3 className='md:text-right text-3xl font-bold whitespace-nowrap'>{item.title}</h3>
                                <p className='text-zinc-800 text-md'>{item.description}</p>
                            </div>
                        </div>
                    ))}


                </div>
                {/* middle image */}
                <div className='md:flex min-w-1/2 hidden'>
                    <img src={Basket} alt='productimage' />
                </div>
                {/* right values */}
                <div className='min-h-100 gap-5 md:gap-0 flex flex-col justify-between  '>
                    {contentValues.slice( 2).map((item) => (

                        <div key={item.id} className='flex items-center '>
                            <div className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-2xl rounded-full flex items-center px-4  justify-center w-[50px] h-[50px]'>
                                {item.icon}
                            </div>

                            <div className=' flex flex-col p-2'>
                                <h3 className=' text-3xl font-bold whitespace-nowrap'>{item.title}</h3>
                                <p className='text-zinc-800 text-md'>{item.description}</p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}


const contentValues = [
    {
        id: 1,
        title: 'Trust',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    },
]










