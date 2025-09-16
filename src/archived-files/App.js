import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './archived/Headers/Header';
import Contact, { Success } from './Components/Contact';
import CallMe from './Components/Store/CallMe';
import { Navigate } from 'react-router-dom';
import Terms from './components/ui/Policies/Terms';
import Blogs from './Components/Blogs';
import SingleBlog from './Components/Blogs/SingleBlog';
import { ToastContainer } from 'react-toastify';
const Home = lazy(() => import('./Components/Home/Home'));
const Footer = lazy(() => import('./components/layouts/Footer/Footer'))
const Services = lazy(() => import('./Components/Services/Services'));
const Tools = lazy(() => import('./Components/Tools/Tools'));
const Products = lazy(() => import('./Components/Products/Products'));




function App() {
  // bg-gradient-to-tl from-orange-300 to-[#f2f5c1]
  return (

    <div className='bg-gradient-to-tl to-[#FFFFDE] from-orange-300'>
      <Header />
      <div className='h-[3.5rem]'></div>
      <CallMe />
      <Routes>
        <Route exact path='/' element={
          <Suspense fallback={
            <div className='w-screen h-screen'>
              <div id="loading-bar-spinner" class="spinner">
                <div class="spinner-icon">
                </div>
              </div>
            </div>
          } >
            <Home />
          </Suspense>
        } />
        <Route exact path='/home' element={
          <Suspense fallback={
            <div className='w-screen h-screen'>
              <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
            </div>
          } >
            <Home />
          </Suspense>
        } />

        <Route path='/products' element={
          <Suspense fallback={
            <div className='w-screen h-screen'>
              <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
            </div>
          } >
            <Products />
          </Suspense>
        }
        />

        <Route path='/services' element={
          <Suspense fallback={
            <div className='w-screen h-screen'>
              <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
            </div>
          } >
            <Services />
          </Suspense>} />
        <Route path='/tools' element={
          <Suspense fallback={
            <div className='w-screen h-screen'>
              <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
            </div>
          } >
            <Tools />
          </Suspense>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:blod_id' element={<SingleBlog />} />
        <Route path='/pages/success' element={<Success />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>

  )
}

export default App;







export function Page404() {

  return (
    <div className=' h-[90vh] grid place-items-center'>
      <div className='grid justify-center'>
        <div className='text-red-500 flex justify-center'>
          <h1>404 Page not found</h1>
        </div>

        <div className='flex flex-col items-center my-[20vh]'>
          <div className='font-bold text-lg sm:text-xl md:text-2xl'>Here are the Links to find the route for you</div>
          <div className='flex flex-wrap gap-[.5rem] my-10 md:gap-4 justify-around'>
            <Link to="/home" className='no-underline p-2 rounded-lg hover:text-white text-gray-100 font-bold bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]' >Home</Link>
            <Link to="/Products" className='no-underline p-2 rounded-lg hover:text-white text-gray-100 font-bold bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]'>Products</Link>
            <Link to="/Tools" className='no-underline p-2 rounded-lg hover:text-white text-gray-100 font-bold bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]' >Tools</Link>
            <Link to="/Service" className='no-underline p-2 rounded-lg hover:text-white text-gray-100 font-bold bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]' >Services</Link>
            <Link to="/Contact" className='no-underline p-2 rounded-lg hover:text-white text-gray-100 font-bold bg-[#15c5fb] hover:shadow-lg hover:shadow-[#15c5fb]' >Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )

}