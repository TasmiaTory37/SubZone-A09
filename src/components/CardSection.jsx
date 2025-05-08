import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardSection = ({ cards }) => {
    const [displayCards, setDisplayCards] = useState([]);
    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        if (viewAll) {
            setDisplayCards(cards);
        } else {
            setDisplayCards(cards.slice(0, 6));
        }
    }, [cards, viewAll]);

    useEffect(() => {
        if (viewAll) {
            window.scrollTo(0, 0);
        }
    }, [viewAll]);


    
 
    return (
        <div className='py-12'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-3xl'>Subscription Services</h1>
               
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-[85%] mx-auto'>
                {displayCards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>

            <button
                        className='bg-blue-500 mx-auto block text-center px-6 py-2 rounded-4xl text-white font-semibold'
                        onClick={() => {
                            setViewAll((prev) => !prev);
                           
                        }}
                    >
                        {viewAll ? 'View Less' : 'View All '}
                    </button>
                
        </div>
    );
};

export default CardSection;
