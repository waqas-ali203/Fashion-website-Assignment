import React from 'react'
import Button from "@/components/Button";


const BlackCard = ({title="Card Heading", description="Card detail" }) => {
  return (
    <div className='flex flex-col justify-center items-center my-auto p-16 bg-black text-white'>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button title="BUY NOW" className="bg-white text-white w-fit"/>
    </div>
  )
}

export default BlackCard
