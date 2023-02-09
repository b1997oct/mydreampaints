import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Tools from './Components/Tools/Tools';
import Contact, { Success } from './Components/Contact';
import CallMe from './Components/Store/CallMe';
import { Navigate } from 'react-router-dom';
import Terms from './Policies/Terms';




function App() {

  return (

    <div className='bg-gradient-to-tl from-orange-300 to-[#f2f5c1]'>
      <Header />
      <CallMe />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages/success' element={<Success/>} />
        <Route path="/terms-and-conditions" element={<Terms/>} />
        <Route path='/' element={<Navigate replace to="/home" />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
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