import React from 'react'
import BlackCard from '../BlackCard'

const BlackCardSection = () => {
    const CardItem = [
        {
            title:'PEACE OF MIND',
            description : 'A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.'
        },
        {
            title:'BUY 2 GET 1 FREE',
            description : 'End of season sale. Buy any 2 items of your choice and get 1 free.'
        },
        
    ]
  return (
    <div className='flex flex-wrap gap-5 p-5 mt-12'>
      {CardItem.map((item, index) =>(
        <BlackCard key={index} title={item.title} description={item.description}/>
      ))};
    </div>
  )
}

export default BlackCardSection
