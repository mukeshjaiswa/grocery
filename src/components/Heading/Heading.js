import React from 'react'

export default function Heading(props) {
    return (
        <div className='w-fit mx-auto  mt-10 md:mt-0'>
            <h2 className='font-bold md:text-5xl text-3xl'>
                <span className='text-orange-500'>{props.highlight}</span> {props.content}
            </h2>
            <div className='w-32 mt-3 md:mt-5 h-1 ml-auto bg-orange-400'></div>
        </div>
    )
}
