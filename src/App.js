import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Services from './Components/Services';
import Tools from './Components/Tools';
import Contact from './Components/Contact';


function App() {

  return (

    <div className='App'>
      <Router>
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
      </Router>
    </div>

  )
}

export default App;