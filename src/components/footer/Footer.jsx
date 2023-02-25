import './styles/Footer.css';

function Footer() {
  return (
    <footer className="section-dark d-flex flex-column align-items-center justify-content-end">

      <p className="footer-text text-center">
        <img className="footer-logo" src="./image/logo.png" alt="Portfolio's logo" /> Portafolio AriRock
      </p>

      <div className="copyright">
        Designed and Developed <br /> by <br /> Farfan David Dante (2023) &#169;
        <a href="mailto: farfandavid34@gmail.com" target='_blank' rel='noopener noreferrer' >
          <i className='bi bi-envelope-at'></i>
        </a>
        <a href="https://www.linkedin.com/in/david-dante-farfan/" target='_blank' rel='noopener noreferrer' >
          <i className='bi bi-linkedin'></i>
        </a>
        <a href="https://wa.link/jdui33" target='_blank' rel='noopener noreferrer' >
          <i className='bi bi-whatsapp'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;