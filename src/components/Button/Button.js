import React from 'react'

export default function Button(props) {
    return (
        <button className='bg-gradient-to-b from-orange-400 to-orange-600 px-8 py-3 rounded-md text-white text-lg transition-all duration-300 hover:to-orange-700 hover:scale-105 cursor-pointer'>{props.content}</button>
    )
}
