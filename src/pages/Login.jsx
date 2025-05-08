import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

     useEffect(() => {
        document.title = "SubZone - Login"; // Set dynamic title for Home page
      }, []);

    const { userLogin, setUser,handleGoogle} = useContext(AuthContext);
    const [error,setError]=useState({});
    const [showPassword,setShowPassword]=useState(false)
  
    const location=useLocation();
    const navigate=useNavigate();
    const emailRef=useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.pass.value;
      // console.log({ email, password });
      userLogin(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          setUser(user);

          Swal.fire({
            title: 'Congratulations!',
            text: 'Login Successful.',
            icon: 'success',
            confirmButtonText: 'Okay'
          })

          const from = location.state?.from?.pathname || '/'; 
          navigate(from);
        })
        .catch((err) => {
         //console.log(err.code)
         setError({ ...error, login: err.code });


         Swal.fire({
          title: 'Oppps!',
          text: 'Login failed. Please check your credentials.',
          icon: 'error',
          confirmButtonText: 'Okay'
        })







       
        });
    };
  
    const handleGoogleLogIn =()=>{
       handleGoogle()
       .then((res)=>{
           const user=res.user;
        console.log(user)
        setUser(user);    

        Swal.fire({
          title: 'WOW!',
          text: `Welcome, ${user.displayName}`,
          icon: 'success',
          confirmButtonText: 'Okay'
        })






        const from = location.state?.from?.pathname || '/'; 
        navigate(from);                         
       })
       .catch(err=>{

        
        Swal.fire({
          title: 'Oppps!',
          text: `Google Login failed: ${err.message}`,
          icon: 'error',
          confirmButtonText: 'Okay'
        })


      
      }) 
    }






    
    return (
        <div className='flex justify-center items-center min-h-screen'>  
             
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center font-bold text-2xl'>Login Your Account</h2>
             <form onSubmit={handleSubmit}  className="card-body">
            <fieldset className="fieldset">
            <label className="text-base">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required/>
            
            
           

            <div className="relative">
            <label className="text-base fieldset">Password</label>
         
          <input type={showPassword ? 'text' : 'password'} name='pass' 
          placeholder="Password" 
          className="input" required />
          {/* eys */}
          <button
       onClick={()=>setShowPassword(!showPassword)}
       className='btn btn-xs absolute right-7 top-10'>
        {
          showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
        }
        </button>

       


<label className="label">
            <Link  to="/auth/forgot-password"
    state={{ email: emailRef.current?.value || '' }} 
    className="label text-red-500 link link-hover">            
              Forgot password?</Link>
          </label>



          
        {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )} 
           </div>

         
            <button className="btn btn-neutral mt-4">Login</button>


          
          
          <button onClick={handleGoogleLogIn}  className='btn  mt-4 '><FaGoogle className='text-blue-800'></FaGoogle> LogIn With Google</button>
          
        




            <p className=' text-base'>Don't have an Account? <Link className='text-green-500 link link-hover' to="/auth/register">Register</Link>  </p>
          </fieldset>
        </form>
      </div>

      
  
        </div>
    );
};

export default Login;