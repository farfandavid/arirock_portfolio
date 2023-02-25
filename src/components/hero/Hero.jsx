import './styles/Hero.css'


function Hero() {
  return (
    <main className='hero-container'>

      <div className='hero-pic'>
        <img className='hero-image-developer' src="./image/image1.png" alt='profile pic'></img>
      </div>
      <div className='hero-info'>
        <div className='heroinfo-container'>
          <h2>Hola! Soy</h2>
          <h1>Ariel Ezequiel Ramirez</h1>
          <p className='MyTitle'>Artista Visual</p>
          <p> <i> "Los trazos de sus pinceladas son un estilo en particular del artista que lo identifica con la gran diversidad de colores con sus tonalidades dando esa expresión geométrica figurativa describiendo la cultura de Jujuy."</i></p>
          <p className='hero-social-media'>Vista mis redes!
            <a href='https://www.facebook.com/ezequiel.ramirez.39501' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='https://www.instagram.com/arirock_ramirez_art' target='_blank' rel='noopener noreferrer' >
              <i className='bi bi-instagram'></i>
            </a>
            <a href="https://www.youtube.com/channel/UCS_3rFyzepr8IMs-MwGU_kg" target='_blank' rel='noopener noreferrer' >
              <i className='bi bi-youtube'></i>
            </a>
            <a href="mailto:  ez3ariel@gmail.com" target='_blank' rel='noopener noreferrer' >
              <i className='bi bi-envelope'></i>
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;