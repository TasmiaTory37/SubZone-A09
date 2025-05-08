import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../components/ForgotPassword";
import Details from "../pages/Details";
import Contact from "../pages/Contact";
import PopularDetails from "../pages/PopularDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";


export const router=createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement:<ErrorPage/>,
    
      children:[
        {
          path: '/',
          Component: Home,
          loader: () => {
            return Promise.all([
              fetch('../subscards.json'),
              fetch('../popular.json')
            ])
              .then(([subscardsResponse, popularResponse]) => {
                return Promise.all([
                  subscardsResponse.json(),
                  popularResponse.json()
                ]);
              })
              .then(([subscards, popular]) => {
                return { subscards, popular };
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
                return { subscards: [], popular: [] };
              });
          },
        },

        {
          path:'/about',
          Component:About,
        },

        {
          path:'/faq',
          Component:FAQ,
        },
        {
          path:'/contact',
          Component: Contact,

        },
        {
          path:'/terms',
          Component: TermsAndConditions,

        },
        {
          path:'/privacy',
          Component: PrivacyPolicy,

        }

      ]
    },
    

        {
          path:'/details/:id',
          element:<PrivateRoute>
           <Details></Details>,
          </PrivateRoute>,
          loader:async({params})=>{

           const res=await fetch('/subscards.json')
           const data=await res.json()
          console.log(data,params.id)
          const singleData=data.find(d=>d.id == params.id)
           return singleData
          }
          },
        {
          path:'/popular-details/:id',
          element:<PrivateRoute>
           <PopularDetails></PopularDetails>,
          </PrivateRoute>,
          loader:async({params})=>{

           const res=await fetch('/popular.json')
           const data=await res.json()
          console.log(data,params.id)
          const singleData=data.find(d=>d.id == params.id)
           return singleData
          }
          },

       

         {
         path:'/login',
         element:<PrivateRoute>
           <MyProfile></MyProfile>
         </PrivateRoute>
        },
         {
             path:'/my-profile',
            element:<MyProfile></MyProfile>
         },
         {
          path:'/update-profile',
          element:<UpdateProfile></UpdateProfile>
         },
         {
           path:'/auth',
          element:<AuthLayout></AuthLayout>,
          children:[
           {
               path:'/auth/register',
               element:<Register></Register>
             },
             {
              path:'/auth/login',
              element:<Login></Login>
            },
            
      
            {
             path:'/auth/forgot-password',
              element:<ForgotPassword></ForgotPassword>
            },
          ]
        },  
      

       

       
      
  ])