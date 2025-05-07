import React from 'react';
import CountUp from 'react-countup';
import successproduct from '../assets/success-product.png'
import successcustomer from '../assets/success-customer.png'
import successreview from '../assets/success-review.png'

const Success = () => {
    return (
        <>
            <div className='w-[90%] mx-auto text-center mb-8'>
                <h1 className='w-[90%] mx-auto font-bold text-3xl'>We Provide Best Subscription Services </h1>
                <p className='pt-5'></p>
            </div>

       

        <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 w-[85%] mx-auto '>
            <div className="max-w-sm p-6 flex flex-col items-center lg:items-start  border border-gray-200 rounded-lg shadow-sm bg-amber-50">
            <img src={successproduct} alt="" />
           
            <CountUp className='text-3xl font-bold py-2 '
                    start={0}
                    end={8}
                    duration={3}
                    delay={0.5}
                    suffix='+'
                    enableScrollSpy
                    scrollSpyOnce
                />
             
            <p>Total Products</p>
    
  
        </div>
       
            <div className="max-w-sm p-6 bg-blue-100 flex flex-col items-center lg:items-start border border-gray-200 rounded-lg shadow-sm">
            <img src={successcustomer} alt="" />
          
            <CountUp className='text-3xl font-bold py-2 '
                    start={0}
                    end={500}
                    duration={3}
                    delay={0.5}
                    suffix='+'
                    enableScrollSpy
                    scrollSpyOnce
                />
               
           
            <p>Total Customers</p>
    
           
    
  
        </div>

        
            <div className="max-w-sm p-6 bg-green-100 flex flex-col items-center lg:items-start border border-gray-200 rounded-lg shadow-sm">
            <img src={successreview} alt="" />
  
            <CountUp className='text-3xl font-bold py-2 '
                    start={0}
                    end={2000}
                    duration={3}
                    delay={0.5}
                    suffix='+'
                    enableScrollSpy
                    scrollSpyOnce
                />
             
          
          
    
           
            <p>Total Reviews</p>
    
  
        </div>
        
           
    
  
        </div>
        </>



            
            
            
        
    );
};

export default Success;