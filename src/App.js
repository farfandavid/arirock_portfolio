import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Hero from './components/hero/Hero';

import NavBar from './components/navbar/NavBar';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='divider'></div>
      <AboutMe></AboutMe>
      <Testimonials />
    </div>
  );
}

export default App;
