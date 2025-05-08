import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';


const UpdateProfile = () => {

   useEffect(() => {
         document.title = "SubZone - Update Profile"; 
       }, []);

 const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(name, photoURL);
    


      Swal.fire({
        title: 'Congratulations!',
        text: 'Profile Updated Successfully.',
        icon: 'success',
        confirmButtonText: 'Okay'
      })




      navigate("/my-profile");
    } catch (error) {
      console.error("Error updating profile: ", error.message);
      alert('Failed to update profile')
    }
  };

  return (
    <div>
       <Navbar></Navbar> 
       <div className='w-3/12 mx-auto' >                     
     <div className="update-profile">
      <h1 className='text-2xl font-bold my-3 text-center'>Update Profile</h1>
      <form onSubmit={handleUpdate}>
        <div className='form-control'>
          <label className='text-xl font-semibold'>Name:</label>
          <input
            type="text"
            value={name}
            className="input input-bordered"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label className='text-xl font-semibold '>Photo URL:</label>
          <input
            type="url"
            className="input input-bordered"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-accent my-4' type="submit">Update Information</button>
        
      </form>
    </div>  
    </div>       
                  
    </div>
  );
};

export default UpdateProfile;