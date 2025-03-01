
import React from 'react'

const Button = ({title , onclick}) => {
  return (
    <div>
      <button type='button' onclick={onclick} className='bg-black text-white text-sm py-2 px-4'>{title}</button>
    </div>
  )
}

export default Button
