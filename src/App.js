import  Navbar  from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import {React } from 'react';
import Gallery  from './Components/Gallery';
import About from  './Components/About'
import { Routes,Route } from 'react-router-dom';
import Services from './Components/Services';
import Home from './Components/Home';
import Contact from './Components/Contact';
function App() {
  return (
      <>
      <Navbar />
      <Routes>
      <Route path='galleryphoto' element={<Home/>}>
        <Route path=':home'  element={<Home/>} />
      </Route>
      <Route path='galleryphoto' element={<About/>}>
        <Route path=':about'  element={<About/>} />
      </Route>
      <Route path='galleryphoto' element={<Gallery/>}>
        <Route path=':home'  element={<Gallery/>} />
      </Route>
      {/* <Route path='galleryphoto' element={<Home />} />
      <Route path='galleryphoto/home' element={<Home />} />
      <Route path='galleryphoto/about' element={<About />} />
      <Route path='galleryphoto/gallery' element={<Gallery />} />
      <Route path='galleryphoto/Services' element={<Services />} />
      <Route path='galleryphoto/contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
      </>
  );
}

export default App;
