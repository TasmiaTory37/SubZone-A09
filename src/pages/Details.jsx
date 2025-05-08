import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';
import Footer from '../components/Footer';

const Details = () => {
   useEffect(() => {
      document.title = "SubZone - Details"; 
    }, []);

  const data = useLoaderData();


  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

 
  const submitReview = () => {
    if (reviewText.trim() === "" || !rating) {
      alert("Please enter a review and select a rating.");
      return;
    }

    const newReview = { reviewText, rating };
    setReviews([...reviews, newReview]);

    setReviewText('');
    setRating('');
  };

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

    
      <div className="max-w-xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-3">Leave a Review</h2>

      
        <div className="mb-5">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md mb-3"
            placeholder="Write your review here..."
          />
          <div className="mb-3">
            <label htmlFor="rating" className="block text-lg font-semibold mb-1">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
            onClick={submitReview}
            className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600"
          >
            Submit Review
          </button>
        </div>

       
        <h3 className="text-xl font-semibold mb-3">Reviews:</h3>
        <div>
          {reviews.map((review, index) => (
            <div key={index} className="border p-4 mb-3 rounded-md bg-gray-100">
              <p className="text-lg">{review.reviewText}</p>
              <p className="mt-2 text-md font-semibold">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Details;
