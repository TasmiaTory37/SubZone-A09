import React, { useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';
import Footer from '../components/Footer';

const PopularDetails = () => {
   useEffect(() => {
      document.title = "SubZone - Details"; 
    }, []);
 
  const data = useLoaderData();


  if (!data) {
    return (
      <div>
        <Navbar />
        <p className="text-center mt-10 text-xl">Loading or data not found...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="card bg-base-100 w-96 shadow-sm flex justify-center items-center mx-auto my-10">
        <figure>
          <img src={data.thumbnail} alt={data.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.tech_category}</p>
          <p>{data.description}</p>
          <p><span className="font-bold"> Features: </span>{data.features}</p>
          <p><span className="font-bold"> Subscription Benefits: </span>{data.subscription_benefits}</p>
          <p className="font-bold">{data.price}{data.frequency}</p>
          <p><span className="font-bold"> Ratings: </span>{data.ratings}</p>
          <p><span className="font-bold"> Reviews: </span> {data.number_of_reviews}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    
      <Footer />
    </div>
  );
};

export default PopularDetails;
