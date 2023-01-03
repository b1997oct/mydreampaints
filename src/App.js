import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Tools from './Components/Tools/Tools';
import Contact from './Components/Contact';
import CallMe from './Components/Store/CallMe';




function App() {

  return (
  

    <div className='bg-gradient-to-tr from-gray-300 to-gray-200'>
    {/* // <div className='App bg-gradient-to-tr from-fuchsia-400 to-pink-500 via-rose-300'> */}
      
        <Header />
        {/* <CallMe /> */}
        <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />    
    </div>

  )
}

export default App;