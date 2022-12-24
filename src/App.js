import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Services from './Components/Services';
import Tools from './Components/Tools/Tools';
import Contact from './Components/Contact';



function App() {

  return (

    <div className='App bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500'>
      <Header />
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