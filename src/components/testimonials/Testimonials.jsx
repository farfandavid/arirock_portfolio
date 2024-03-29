import { useEffect, useState } from 'react';
import ArtCarouselItem from './components/ArtCarouselItem';
import BodyContent from './components/BodyContent';
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
  return digitalDrawsData;
}

function BodyPaintData() {
  const [bodyPaintData, setBodyPaintData] = useState([]);

  useEffect(() => {
    fetch("jsons/body_paint.json")
      .then(response => response.json())
      .then(datos => {
        setBodyPaintData(datos)
      })
  }, []);
  return bodyPaintData;
}

function Testimonials() {

  const arts = ArtsData();
  const draws = DrawsData();
  const digitalDraws = DigitalDrawsData();
  const bodypaints = BodyPaintData();

  return (
    <section className="testimonials section-light">
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
      <h2 className="section-title mt-5">Body Paint</h2>
      <div className='bodypaint-container'>
        {
          bodypaints.map(paint => (
            <BodyContent
              key={paint.id + 'body'}
              artists={paint.artists}
              description={paint.description}
              models={paint.models}
              organizers={paint.organizers}
              title={paint.title}
              pics={paint.pics}
            ></BodyContent>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonials;