import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';

import CardSection from '../components/CardSection';
import MostPopularSection from '../components/MostPopularSection';

import Success from '../components/Success';


const Home = () => {
  useEffect(() => {
    document.title = "SubZone - Home";
  }, []);
  
  const { subscards, popular } = useLoaderData();

  
  console.log(subscards, popular);

  return (
    <div>

     
      <Banner />
      
      <CardSection cards={subscards} />
      <MostPopularSection cards={popular} />
      
      <Success />
    </div>
  );
};

export default Home;
