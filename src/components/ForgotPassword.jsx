import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import app from '../firebase/firebase.config';

const ForgotPassword = () => {
  useEffect(() => {
    document.title = "SubZone - Forgot Password"; 
  }, []);

  const auth = getAuth(app);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');  


  const prefilledEmail = location.state?.email || '';

  useEffect(() => {
    if (prefilledEmail) {
      emailRef.current.value = prefilledEmail; 
    }
  }, [prefilledEmail]);

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;

    if (!email) {
      setError('Please provide a valid email');
      return;
    }

    setLoading(true); 

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);  
        alert('Password reset email sent successfully! Please check your inbox.');
        
        const resetPasswordLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=Password%20Reset&body=Click%20on%20the%20link%20to%20reset%20your%20password.`;
        window.open(resetPasswordLink, '_blank');  

      
        navigate('/login');
      })
      .catch((error) => {
        setLoading(false);  
        if (error.code === 'auth/user-not-found') {
          setError('No user found with this email address.');
        } else {
          setError('Failed to send password reset email. Please try again.');
        }
        console.error('Error sending password reset email:', error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl my-3">Forgot Password</h2>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}  
          
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button 
              onClick={handleForgetPassword} 
              className="btn btn-success" 
              disabled={loading}  
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
