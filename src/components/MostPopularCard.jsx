import React from 'react';
import { NavLink } from 'react-router';



const MostPopularCard = ({card}) => {
    const{thumbnail,name,tech_category,ratings,number_of_reviews,description,id }=card
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm p-5 ">
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
                
                <p className='pb-2'> {description }</p>

                <div className='flex items-center gap-2'>
               
                <p><span className='font-bold'>Ratings : </span>{ratings}</p>
               
            
                </div>
                <p> <span className='font-bold'>Reviews : </span>{number_of_reviews}</p>
              
                
                <NavLink to={`/popular-details/${id}`} className='w-full px-5 py-2 mt-3 text-center rounded-4xl border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 '>Subscribe Now!</NavLink>
              
                 
                  
                  
            </div>
        </div>
            
        
        
    );
};

export default MostPopularCard;