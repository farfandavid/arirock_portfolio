import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
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
    </div>
  );
}

export default App;
