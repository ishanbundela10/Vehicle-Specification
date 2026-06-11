import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className='font-medium text-xs bg-gray-500 py-2 px-1 rounded-2xl text-center h-30 w-23'>
        <span>{props.title}</span>
        <img src={props.img} alt={props.title} className="w-20 h-20 object-contain" />
      </button>
    </>
  )
}

export default Button
