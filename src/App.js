import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

import NavBar from './components/navbar/NavBar';
import Products from './components/products/Products';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <div id="arts" className='divider mt-5'>Artes</div>
      <Testimonials />
      <div id="products" className='divider'>Productos</div>
      <Products></Products>
      <div id="products" className='divider'>Contactame</div>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
