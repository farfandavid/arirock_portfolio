import { useEffect, useState } from 'react';
import ArtCarouselItem from './components/ArtCarouselItem';
import './styles/Testimonials.css'

function ArtsData() {
  const [artsData, setArtsData] = useState([]);

  useEffect(() => {
    fetch("jsons/artes.json")
      .then(response => response.json())
      .then(datos => {
        setArtsData(datos)
      })
  }, []);
  return artsData;
}


function Testimonials() {

  const arts = ArtsData();
  return (
    <section id="testimonials" className="testimonials section-light">
      <h2 className="section-title">Artes</h2>
      <h3 className="section-description">Una pequeña demostracion de algunas de mis obras</h3>
      {/* <!-- Carousel --> */}
      <div id="testimonials-carousel" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {arts.map(art => (
            <ArtCarouselItem key={'art' + art.id}
              name={art.name}
              description={art.description}
              image={art.image}
              size={art.size}
            ></ArtCarouselItem>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;