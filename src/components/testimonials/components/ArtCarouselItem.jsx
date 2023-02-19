function ArtCarouselItem({ id, image, name, description, size }) {
  return (
    <div className={id === 1 ? 'carousel-item active' : 'carousel-item'} >
      <div className="container">
        <img className="art-image" src={image} alt={description} />
        <p className="art-text">{description}</p>
        <div className="art-info">
          <p className="art-name">{name}</p>
          <p className="art-size">{size}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtCarouselItem;