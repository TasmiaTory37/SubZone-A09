import  { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';


const MyProfile = () => {


    useEffect(() => {
       document.title = "SubZone - My Profile"; 
     }, []);




     const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
 return (
    <div className='text-center'>
         <Navbar></Navbar>  
        <h1 className='text-center text-3xl font-bold'>User Profile</h1>               
      <div className="profile-page">
      <h1 className='text-2xl my-3'>Welcome, {user?.displayName || "User"}!</h1>
      <div className="profile-info">
        <img className='block mx-auto' src={user?.photoURL || "/default-profile.png"} alt="Profile" />
        <p className='text-xl my-3'>Email: {user?.email}</p>
        <button className='btn btn-success' onClick={() => navigate("/update-profile")}>Update Profile</button>
      </div>
    </div>                        
    </div>
 );
};

export default MyProfile;