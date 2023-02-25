import './styles/ContactMe.css';

function ContactMe() {
  return (
    <section id="contact" className="contact section-dark">
      <div className="contact-background">
        <div className="d-flex-column align-items-center text-center">
          <div className="section-title">
            Dime tu idea!
          </div>
          <div className="section-description">
            Contactame!
          </div>
          <div className="">
            <a href="mailto: ez3ariel@gmail.com" target='_blank' rel='noopener noreferrer'>
              <button type="button">
                Email
                <i className="bi bi-envelope-check-fill"></i>
              </button>

            </a>
            <a href="https://wa.link/d0apme" target='_blank' rel='noopener noreferrer' >
              <button type="button" >
                Whatsapp
                <i className="bi bi-whatsapp"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;