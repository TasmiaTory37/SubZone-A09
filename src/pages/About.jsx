import React, { useEffect } from 'react';


const About = () => {
  useEffect(() => {
    document.title = "SubZone - About"; 
  }, []);
  return (
    <div>
      <div id="about" className="text-center px-4 py-10 max-w-4xl mx-auto">
      
        <h3 className="lg:text-2xl text-xl font-bold text-gray-800 mt-4">
          Welcome to <span className="text-purple-600 font-extrabold">SubZone</span> — your trusted hub for managing and purchasing premium digital subscriptions at affordable rates.
        </h3>

        <p className="text-gray-600 mt-4 text-base">
          At SubZone, we help you access world-class entertainment and productivity platforms all in one place—no hassle, no hidden fees. From binge-worthy series to professional tools, we simplify your subscription journey.
        </p>

        <p className="text-amber-500 mt-6 text-2xl font-bold">Our Services</p>

     
          <li>Access to Amazon Prime Video and Netflix at discounted group rates.</li>
          <li>ChatGPT Plus subscription for enhanced AI productivity.</li>
          <li>YouTube Premium and Spotify Premium plans for ad-free streaming.</li>
          <li>Regional content access via Hoichoi, Chorki, and Zee5.</li>
          <li>Canva Pro subscriptions for designers and marketers.</li>
          <li>Simple dashboard to manage all your subscriptions in one place.</li>
          <li>Group subscription sharing to reduce individual costs.</li>
       

        <button className="btn mt-6 btn-accent">See More</button>
      </div>
    </div>
  );
};

export default About;
