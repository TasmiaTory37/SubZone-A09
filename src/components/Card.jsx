import React from 'react';
import { NavLink } from 'react-router';



const Card = ({card}) => {
    const{thumbnail,name,tech_category,price,frequency,id }=card
    return (
        <div className=''>
            <div className="card bg-base-100 border-blue-100 border-1 shadow-md p-5 ">
                <figure className=''>
                    <img className='h-[300px] w-full  rounded-xl'
                    src={thumbnail}
                    alt="" />
                </figure>

                
                
                <div className="items-center mt-4">
                    <h2 className="font-bold">{name}</h2>
                    
                   
                </div>
                <div  className='flex '>
                    <p className='text-gray-400'>{tech_category }</p>
                    
                    
                  </div>
                <div className='flex items-center gap-2 mb-3'>
               
                <p>{price} {frequency }</p>
                </div>
               
                
                <NavLink to={`/details/${id}`}><button className='btn bg-blue-300 hover:bg-blue-500 hover:text-white text-black rounded-xl'>View More</button></NavLink>
                 
                  
                  
            </div>
        </div>
            
        
        
    );
};

export default Card;