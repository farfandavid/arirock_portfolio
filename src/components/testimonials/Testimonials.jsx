import { useEffect, useState } from 'react';
import ArtCarouselItem from './components/ArtCarouselItem';
import DigitalDrawCard from './components/DigitalDrawCard';
import DrawCard from './components/DrawCard';
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
  console.log(artsData)
  return artsData;
}

function DrawsData() {
  const [drawsData, setDrawsData] = useState([]);

  useEffect(() => {
    fetch("jsons/dibujos.json")
      .then(response => response.json())
      .then(datos => {
        setDrawsData(datos)
      })
  }, []);
  console.log(drawsData)
  return drawsData;
}

function DigitalDrawsData() {
  const [digitalDrawsData, setDigitalDrawsData] = useState([]);

  useEffect(() => {
    fetch("jsons/dibujos_digitales.json")
      .then(response => response.json())
      .then(datos => {
        setDigitalDrawsData(datos)
      })
  }, []);
  console.log(digitalDrawsData)
  return digitalDrawsData;
}

function Testimonials() {

  const arts = ArtsData();
  const draws = DrawsData();
  const digitalDraws = DigitalDrawsData();

  return (
    <section id="testimonials" className="testimonials section-light">
      <h2 className="section-title">Obras</h2>
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
              id={art.id}
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
      <h2 className="section-title">Dibujos</h2>
      <h3 className="section-description">Dibujos tradicionales</h3>
      <div className='draws-container'>
        {
          draws.map(draw => (
            <DrawCard key={'draw' + draw.id} image={draw.image}></DrawCard>
          ))
        }
      </div>
      <h2 className="section-title">Dibujos Digitales</h2>
      <h3 className="section-description">Digitales</h3>

      <div className='digdraw-container'>
        {
          digitalDraws.map(digitalDraw => (
            <DigitalDrawCard
              key={digitalDraw.id + 'ddraw'}
              image={digitalDraw.image}
              name={digitalDraw.name}
            ></DigitalDrawCard>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonials;