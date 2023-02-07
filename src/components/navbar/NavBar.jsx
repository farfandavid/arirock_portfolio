/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './styles/NavBar.css'
//import iconWhite from '../../images/icono-blanco.svg';

function NavBar() {
  const [collapse, setCollapse] = useState(false);

  /* const goToSection = (id) => {
    var section = document.getElementById(id);
    var sectionTop = section.offsetTop;
    var windowHeight = window.innerHeight;

    window.scrollTo({
      top: sectionTop - (windowHeight / 3),
      behavior: 'smooth'
    });
  } */

  const handleClickMenu = () => {
    setCollapse(!collapse);
  }

  return (
    <nav className="navbar-owner">
      <button className='navbar-button-owner' type="button" onClick={handleClickMenu}>
        <i className='bi bi-justify'></i>
      </button>
      <div className={`${collapse ? 'navbar-collapse-owner navbar-container-owner' : 'navbar-container-owner'}`} id="navbar-toggler">
        <a className='navbar-logo' href="#" >
          <img src="./image/logo.png" width="50" alt="logo" />
        </a>

        <ul className='navbar-list' >
          <li >
            <a aria-current="page" href='#about-me' >About me</a>
          </li>
          <li >
            <a href="#project">Projects</a>
          </li>
          <li >
            <a href="#testimonials">Testimonials</a>
          </li>
          <li >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;