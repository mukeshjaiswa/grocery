import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

export default function Cards(props) {
    
    return (
        <div className='bg-zinc-100  p-5 flex flex-col gap-2'>
            {/* Top header of cards */}
            <div className='flex  justify-between'>
                <span className='text-3xl text-zinc-400 cursor-pointer'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-500 to-orange-600 text-white  px-3 rounded-lg'>
                    <FaPlus />
                </button>
            </div>
            {/* cards images */}
            <div className='w-full h-[200px] flex items-center '>
                <img src={props.image} className='w-full h-full object-contain' />
            </div>
            {/* cards content */}
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h2 className='text-2xl font-semibold'>{props.title}</h2>
                <p className='text-2xl font-bold'>$ {props.price.toFixed(2)}</p>

                <Button content='Shop Now' />
            </div>
        </div>
    )
}
