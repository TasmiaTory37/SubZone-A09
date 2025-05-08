import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
                
            </nav>

            <section>
               <Outlet></Outlet>
            </section>
            

            <footer>
                <Footer></Footer>


            </footer>
            
        </div>
    );
};

export default MainLayout;