import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'

import Heading from '../Heading/Heading'
import { PiFactoryThin } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export default function Process() {
    return (
        <section className='max-w-[1200px] mx-auto py-10 px-20'>
            <div className='mr-auto w-fit'>
                <Heading highlight='Our' content='Process' />
            </div>
            <div className='flex md:flex-row flex-col items-center  justify-center mt-10 md:pt-[200px]'>
                {processlist.map((item) => (
                    <div key={item.id} className={`flex flex-col justify-center  basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-[400px]' : ''}`}>
                        <span className='flex items-center justify-center w-[60px] h-[60px] rounded-full bg-zinc-800 text-white mx-auto outline-dashed outline-offset-8 outline-zinc-800  outline-[3px] text-7xl '>{item.number}</span>
                      
                        <div className='flex items-center  mt-6  gap-3'>
                            <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-400 p-3 text-3xl text-white rounded-full '>{item.icon}</span>
                            <div className='flex-1 ' >
                                <h2 className='text-3xl font-bold text-zinc-800 whitespace-nowrap'>{item.title}</h2>
                                <p className='to-zinc-600 mt-2'>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    )
}

const processlist = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <FaLeaf />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactoryThin />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />,
    },
]




