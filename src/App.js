import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Hero from './components/hero/Hero';

import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
